import React from 'react';

const Testimonials = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center">
                    <h2>آراء عملاؤنا</h2>
                    <div className="spacer-single"></div>
                </div>
                <div className="wahed-row">
                    <div className="box">
                        <img src="images/reviews/google.webp" alt="قهوة روبوستا مستوردة" />
                        <p>
                            خدمة ممتازة ومنتجات بجودة عالية
                        </p>
                        <span>شوب زي ستور</span>
                        <img src="images/reviews/google-stars.webp" alt="قهوة عضوية مستوردة" />
                    </div>
                    <div className="box">
                        <img src="images/reviews/google.webp" alt="قهوة فاخرة للبيع في السعودية" />
                        <p>
                            أخيرًا وجدت مكان يوفر منتجات فاخرة أصلية بأسعار مناسبة.
                        </p>
                        <span>شركة الوصال</span>
                        <img src="images/reviews/google-stars.webp" alt="واردات قهوة عالمية" />
                    </div>
                    <div className="box">
                        <img src="images/reviews/google.webp" alt="محمصة قهوة مستوردة" />
                        <p>
                            أنصح الجميع بالتعامل معهم، جودة المنتجات والتعامل الراقي
                        </p>
                        <span>ميلانايت</span>
                        <img src="images/reviews/google-stars.webp" alt="تسوق قهوة مستوردة" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
