import React from 'react';

const VisionMissionValues = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    return (
        <section className="vision-mision">
            <div className="container">
                <div className="row-wahed" dir={isRTL ? 'rtl' : 'ltr'}>
                    <div className={`box ${isRTL ? 'text-end' : ''}`}>
                        <img src="/images/mind.webp" alt="Vision icon" />
                        <h2 className="my-4">{t.vision.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t.vision.description }}></p>
                    </div>
                    <div className={`box ${isRTL ? 'text-end' : ''}`}>
                        <img src="/images/goal.webp" alt="Mission icon" />
                        <h2 className="my-4">{t.mission.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: t.mission.description }}></p>
                    </div>
                    <div className={`box ${isRTL ? 'text-end' : ''}`}>
                        <img src={isRTL ? "/images/strategic-planning.webp" : "/images/strategic-planning-2.webp"} alt="Values icon" />
                        <h2 className="my-4">{t.values.title}</h2>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            <span dangerouslySetInnerHTML={{ __html: t.values.description }}></span>
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
