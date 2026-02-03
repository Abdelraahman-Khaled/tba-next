import React from 'react';

const VisionMissionValues = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    return (
        <section className="vision-mision">
            <div className="container">
                <div className="row-wahed">
                    <div className={`box ${isRTL ? 'text-end' : ''}`}>
                        <img src="/images/mind.webp" alt="Vision icon" />
                        <h2 className="my-4">{t.vision.title}</h2>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.vision.description}
                        </p>
                    </div>
                    <div className={`box ${isRTL ? 'text-end' : ''}`}>
                        <img src="/images/goal.webp" alt="Mission icon" />
                        <h2 className="my-4">{t.mission.title}</h2>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.mission.description}
                        </p>
                    </div>
                    <div className={`box ${isRTL ? 'text-end' : ''}`}>
                        <img src={isRTL ? "/images/strategic-planning.webp" : "/images/strategic-planning-2.webp"} alt="Values icon" />
                        <h2 className="my-4">{t.values.title}</h2>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.values.description}
                            <br />
                            <strong>{t.values.list}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionValues;
