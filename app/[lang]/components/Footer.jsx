import React from 'react';

const Footer = () => {
    return (
        <footer className="position-relative z-index-1000">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-8 text-lg-start text-center">
                        <div className="social-icons">
                            <a href="https://www.instagram.com/tba.sa" target="_blank" rel="noopener noreferrer">
                                <img src="/images/misc/instagram.webp" alt="حساب انستاجرام TBA SA" title="حساب انستاجرام TBA SA" />
                            </a>
                            <a href="https://x.com/legendcoffeeksa" target="_blank" rel="noopener noreferrer" title="حساب اكس TBA SA">
                                <img src="/images/misc/twitter.webp" alt="حساب اكس TBA SA" />
                            </a>
                            <a href="https://www.snapchat.com/add/tba.sa" target="_blank" rel="noopener noreferrer" title="حساب سناب شات TBA SA">
                                <img src="/images/misc/snapchat.webp" alt="حساب سناب شات TBA SA" />
                            </a>
                            <a href="https://www.tiktok.com/@tba.sa" target="_blank" rel="noopener noreferrer" title="حساب تك توك TBA SA">
                                <img src="/images/misc/tik-tok.webp" alt="حساب تك توك TBA SA" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="حساب فيسبوك TBA SA">
                                <img src="/images/misc/facebook.webp" alt="حساب فيسبوك TBA SA" />
                            </a>
                            <a href="https://www.linkedin.com/company/tbatc/" target="_blank" rel="noopener noreferrer" title="حساب لنكيدان TBA SA">
                                <img src="/images/misc/linkedin.webp" alt="حساب لنكيدان TBA SA" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img className="footer-logo img-fluid" src="/images/logo-2.webp" alt="قمة الماركات العربية للتجارة (TBA)" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

