import React from 'react';

const GoogleMap = () => {
    return (
        <div className="google-map">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Google Map IFrame Start */}
                        <div className="google-map-iframe">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28988.781948752196!2d46.64983233266841!3d24.740686592453677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d552c7b44bb%3A0x944d5e0a7900a334!2sKing%20Fahd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1745033324795!5m2!1sen!2seg"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        {/* Google Map IFrame End */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleMap;
