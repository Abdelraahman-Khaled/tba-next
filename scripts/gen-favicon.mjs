import sharp from "sharp";
import fs from "fs";
import path from "path";

const SRC = "public/images/logo.webp"; // brand mark (transparent)
const ROOT = process.cwd();

// Fit the mark onto a transparent square canvas with a little padding.
async function squarePng(size, pad = 0.12) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(SRC)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer();
}

// Build a multi-size .ico that wraps PNG-encoded entries.
async function buildIco(sizes) {
  const pngs = await Promise.all(sizes.map((s) => squarePng(s)));
  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  pngs.forEach((png, i) => {
    const s = sizes[i];
    const b = i * 16;
    dir.writeUInt8(s >= 256 ? 0 : s, b + 0); // width
    dir.writeUInt8(s >= 256 ? 0 : s, b + 1); // height
    dir.writeUInt8(0, b + 2); // palette
    dir.writeUInt8(0, b + 3); // reserved
    dir.writeUInt16LE(1, b + 4); // color planes
    dir.writeUInt16LE(32, b + 6); // bits per pixel
    dir.writeUInt32LE(png.length, b + 8); // data size
    dir.writeUInt32LE(offset, b + 12); // data offset
    offset += png.length;
  });

  return Buffer.concat([header, dir, ...pngs]);
}

const write = (rel, buf) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, buf);
  console.log("wrote", rel, buf.length, "bytes");
};

// App Router conventions (Next.js auto-injects the <link> tags).
write("app/icon.png", await squarePng(512));
write("app/apple-icon.png", await squarePng(180));

// Square .ico for legacy / direct /favicon.ico requests.
const ico = await buildIco([16, 32, 48]);
write("app/favicon.ico", ico);
write("public/favicon.ico", ico);
write("public/images/logo.ico", ico);

console.log("done");
