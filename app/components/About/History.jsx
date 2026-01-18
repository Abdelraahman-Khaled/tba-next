import React from 'react';

const History = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* About us Content Start */}
                        <div className="about-us-content">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h2>كيف بدأت قمة الماركات العربية للتجارة؟</h2>
                            </div>
                            {/* Section Title End */}

                            {/* About Body List Start */}
                            <div className="about-body-list">
                                {/* About Body Item Start */}
                                <div className="about-body-item">
                                    <div className="about-body-list-content">
                                        <p dir="rtl">
                                            منذ عام <strong>2014،</strong> أسسنا "قمة الماركات العربية للتجارة" بهدف
                                            واحد: تقديم الأفضل للعملاء في المملكة. نعمل مع كبار الشركات
                                            العالمية لتوفير تشكيلة مختارة من المنتجات الغذائية التي تمتاز بالجودة
                                            العالية والقيمة المضافة. إن تاريخنا المميز
                                            وتجاربنا في السوق جعلت منا اسمًا موثوقًا في مجال استيراد وتوزيع المنتجات
                                            الغذائية الفاخرة
                                        </p>
                                    </div>
                                </div>
                                {/* About Body Item End */}

                                {/* About Body Item Start */}
                                <div className="about-body-item">
                                    <div className="about-body-list-content">
                                        <h3>أهدافنا</h3>
                                        <p dir="rtl">
                                            على الرغم من التحديات التي واجهت الأسواق العالمية في السنوات الأخيرة،
                                            استمرت "قمة الماركات العربية للتجارة" في النمو
                                            والتوسع، حيث قمنا بزيادة حجم وارداتنا إلى السوق السعودي بشكل ملحوظ،
                                            وزيادة شراكاتنا مع العلامات التجارية الرائدة
                                            عالميًا. وهذا يشمل التوسع في مراكز التوزيع والمستودعات في عدة مدن
                                            سعودية.
                                        </p>
                                    </div>
                                </div>
                                {/* About Body Item End */}

                                {/* About Body Item Start */}
                                <div className="about-body-item">
                                    <div className="about-body-list-content">
                                        <h3>رؤيتنا المستقبلية</h3>
                                        <p dir="rtl">
                                            نسعى أن نكون الشركة الرائدة في قطاع الأغذية الفاخرة في المملكة، ونهدف
                                            إلى توسيع نطاق توزيع منتجاتنا لتشمل أسواقًا إضافية
                                            في منطقة الشرق الأوسط والعالم.
                                        </p>
                                    </div>
                                </div>
                                {/* About Body Item End */}
                            </div>
                            {/* About Body List End */}

                            {/* About Us Footer Start */}
                            <div className="about-us-footer">
                                <div className="about-btn">
                                    <a href="/contact" className="btn-default">تواصل معنا</a>
                                </div>
                            </div>
                            {/* About Us Footer End */}
                        </div>
                        {/* About us Content End */}
                    </div>

                    <div className="col-lg-6">
                        {/* About Us Image Start */}
                        <div className="about-us-image">
                            <div className="about-us-img">
                                <figure className="image-anime">
                                    <img src="images/misc/2.webp" alt="قهوة أرابيكا مستوردة" />
                                </figure>
                            </div>
                        </div>
                        {/* About Us Image End */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
