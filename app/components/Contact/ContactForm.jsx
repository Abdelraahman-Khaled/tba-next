'use client';

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ContactForm = () => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    const [formData, setFormData] = useState({
        fname: '',
        phone: '',
        email: '',
        message: ''
    });
    const [showPopup, setShowPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.status === 'success') {
                setShowPopup(true);
                setFormData({
                    fname: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            } else {
                alert(data.message || (isRTL ? 'حدث خطأ أثناء الإرسال.' : 'An error occurred during submission.'));
            }
        } catch (error) {
            console.error('Error:', error);
            alert(isRTL ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred during submission. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className={`contact-us-form ${isRTL ? 'text-end' : ''}`}>
                {/* Contact Form Content Start */}
                <div className="contact-form-content">
                    <h3>{t.contact.form.title}</h3>
                    <p dir={isRTL ? 'rtl' : 'ltr'}>
                        {t.contact.form.subtitle}
                    </p>
                </div>
                {/* Contact Form Content End */}

                {/* Contact Form Start */}
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6 mb-4">
                                <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    className="form-control"
                                    placeholder={t.contact.form.namePlaceholder}
                                    value={formData.fname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6 mb-4">
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    className="form-control"
                                    placeholder={t.contact.form.phonePlaceholder}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-12 mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder={t.contact.form.emailPlaceholder}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group col-md-12 mb-4">
                                <textarea
                                    name="message"
                                    id="message"
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                    className="form-control"
                                    rows="3"
                                    placeholder={t.contact.form.messagePlaceholder}
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="col-lg-12">
                                <div className="contact-form-btn">
                                    <button
                                        type="submit"
                                        className="btn-default"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? t.contact.form.submittingButton : t.contact.form.submitButton}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Contact Form End */}
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div
                    className="overlay-pop"
                    id="overlay-pop"
                    style={{ display: 'flex' }}
                    onClick={closePopup}
                >
                    <div className="pop-up">
                        <div className="msg">
                            <div>
                                <h2>{t.contact.form.successTitle}</h2>
                            </div>
                            <div>
                                <img src="/images/message.gif" alt="Success" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactForm;
