import React from 'react';

const Features = () => {
    return (
        <section>
            <div className="container">
                <div className="row bb gx-5 gy-4 text-center">
                    <div className="col-lg-4">
                        <img src="images/misc/1st-place.webp" alt="أنواع القهوة العالمية" />
                        <div className="spacer-single"></div>
                        <h3>الجودة أولاً</h3>
                        <p>
                            نؤمن بأن العميل يستحق الأفضل. لذا فإن منتجاتنا هي دائمًا الأفضل في الجودة
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src="images/misc/guaranteed.webp" alt="قهوة برازيلية مستوردة" />
                        <div className="spacer-single"></div>
                        <h3>الالتزام</h3>
                        <p>
                            نعمل مع أفضل الشركاء على مستوى العالم لتقديم المنتجات في المملكة العربية السعودية.
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src="images/misc/expert.webp" alt="قهوة إثيوبية بالجملة" />
                        <div className="spacer-single"></div>
                        <h3>الاحترافية</h3>
                        <p>
                            فريقنا المتخصص والمتدرب بعناية يوفر لك أفضل الخدمات.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
