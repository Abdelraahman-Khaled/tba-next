'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { lang, t, setLanguage } = useLanguage();
    const pathname = usePathname();
    const isArabic = lang === 'ar';
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => {
        return pathname === path || (path !== '/' && pathname.startsWith(path));
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleSwitchLang = (e) => {
        e.preventDefault();
        setLanguage(isArabic ? 'en' : 'ar');
    };

    return (
        <header>
            <div className={`navigation-wrap start-header ${isScrolled ? 'scroll-on' : 'start-style'}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link className="navbar-brand" href="/">
                                    <img src="/images/logo-2.webp" alt="قمة الماركات العربية للتجارة (TBA)" />
                                </Link>

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
                                    <ul id="mainmenu" className={`navbar-nav ${isArabic ? 'me-auto' : 'ms-auto'} py-4 py-md-0`}>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href="/">{t.nav.home}</Link>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/about') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href="/about">{t.nav.about}</Link>
                                        </li>
                                        <li className="nav-item dropdown ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded={isDropdownOpen}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleDropdown();
                                                }}
                                            >
                                                {t.nav.partners}
                                            </a>
                                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                                <Link className="dropdown-item" href="/partners/EL-SABOR" onClick={closeDropdown}>
                                                    {isArabic ? 'إل سابور' : 'El Sabor'}
                                                </Link>
                                                <Link className="dropdown-item" href="/partners/Franui" onClick={closeDropdown}>
                                                    {isArabic ? 'فرانوي' : 'Franui'}
                                                </Link>
                                                <Link className="dropdown-item" href="/partners/Legend" onClick={closeDropdown}>
                                                    {isArabic ? 'نجوين ليجند' : 'Legend'}
                                                </Link>
                                                <Link className="dropdown-item" href="/partners/littel-donkey" onClick={closeDropdown}>
                                                    Little Donkey
                                                </Link>
                                                <Link className="dropdown-item" href="/partners/Marshzone" onClick={closeDropdown}>
                                                    {isArabic ? 'مارشزون' : 'Marshzone'}
                                                </Link>
                                                <Link className="dropdown-item" href="/partners/Mr.Brownie" onClick={closeDropdown}>
                                                    {isArabic ? 'مستر براوني' : 'Mr Brownie'}
                                                </Link>
                                                <Link className="dropdown-item" href="/partners/Sweet-Pistachio" onClick={closeDropdown}>
                                                    {isArabic ? 'سويت بستاشيو' : 'Sweet Pistachio'}
                                                </Link>
                                                <Link className="dropdown-item" href="/partners/Vicenzi" onClick={closeDropdown}>
                                                    Matilde Vicenzi
                                                </Link>
                                                <Link className="dropdown-item" href="/partners/Trolli" onClick={closeDropdown}>
                                                    Trolli
                                                </Link>
                                            </div>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/products') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href="/products">{t.nav.products}</Link>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/blogs') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href="/blogs">{t.nav.blogs}</Link>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/faqs') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href="/faqs">{t.nav.faqs}</Link>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/contact') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href="/contact">{t.nav.contact}</Link>
                                        </li>
                                        <li className="nav-item ps-4 ps-md-0 ms-0 ms-md-4">
                                            <a className="nav-link" href="#" onClick={handleSwitchLang}>
                                                {t.nav.switchLang}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
