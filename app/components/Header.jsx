import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="navigation-wrap start-header start-style">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto py-4 py-md-0">
                                        <li className="active-link nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link" href="/">الرئيسية</a>
                                        </li>
                                        <li className="nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link" href="/about">من نحن</a>
                                        </li>
                                        <li className="nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">شركاء النجاح</a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/EL-SABOR">إل سابور</a>
                                                <a className="dropdown-item" href="/Franui">فرانوي</a>
                                                <a className="dropdown-item" href="/Legend">نجوين ليجند</a>
                                                <a className="dropdown-item" href="/littel-donkey">Little Donkey</a>
                                                <a className="dropdown-item" href="/Marshzone">مارشزون</a>
                                                <a className="dropdown-item" href="/Mr.Brownie">مستر براوني</a>
                                                <a className="dropdown-item" href="/Sweet-Pistachio">سويت بستاشيو</a>
                                                <a className="dropdown-item" href="/Vicenzi">Matilde Vicenzi</a>
                                                <a className="dropdown-item" href="/Trolli">Trolli</a>
                                            </div>
                                        </li>
                                        <li className="nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link" href="/products">المنتجات والخدمات</a>
                                        </li>
                                        <li className="nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link" href="/blogs">المدونة</a>
                                        </li>
                                        <li className="nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link" href="/faqs">الأسئلة الأكثر شيوعاً</a>
                                        </li>
                                        <li className="nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link" href="/contact">تواصل معنا</a>
                                        </li>
                                        <li className="nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link" href="/en/">ENGLISH</a>
                                        </li>
                                    </ul>
                                </div>

                                <a className="navbar-brand" href="/">
                                    <img src="/images/logo-2.webp" alt="قمة الماركات العربية للتجارة (TBA)" />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
