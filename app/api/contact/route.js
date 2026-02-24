import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fname, phone, email, message } = body;

    // Basic validation
    if (!fname || !phone || !email) {
      return NextResponse.json(
        {
          status: "error",
          message: "جميع الحقول مطلوبة",
        },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          status: "error",
          message: "البريد الإلكتروني غير صالح",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "me",
      to: "abodzoro10@gmail.com",
      subject: `New Contact Form Submission from ${fname}`,
      text: `
                Name: ${fname}
                Phone: ${phone}
                Email: ${email}
                Message: ${message}
            `,
      html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${fname}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        status: "success",
        message: "تم إرسال رسالتك بنجاح",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقاً.",
      },
      { status: 500 },
    );
  }
}
