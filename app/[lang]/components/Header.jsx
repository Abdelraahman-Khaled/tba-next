'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { lang, t, setLanguage } = useLanguage();
    const pathname = usePathname();
    const isArabic = lang === 'ar';
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const router = useRouter();

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
        const langPath = `/${lang}${path === '/' ? '' : path}`;
        return pathname === langPath || (path !== '/' && pathname.startsWith(langPath));
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleSwitchLang = (e) => {
        e.preventDefault();
        const newLang = isArabic ? 'en' : 'ar';
        setLanguage(newLang);
        
        let newPathname = pathname;
        if (pathname.startsWith('/ar/')) {
            newPathname = pathname.replace('/ar/', '/');
        } else if (pathname === '/ar') {
            newPathname = '/';
        } else if (pathname.startsWith('/en/')) {
            newPathname = pathname.replace('/en/', '/');
        } else if (pathname === '/en') {
            newPathname = '/';
        }
        
        router.push(`/${newLang}${newPathname === '/' ? '' : newPathname}`);
    };

    return (
        <header dir={isArabic ? 'rtl' : 'ltr'}>
            <div className={`navigation-wrap start-header ${isScrolled ? 'scroll-on' : 'start-style'}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link className="navbar-brand" href={`/${lang}`}>
                                    <img src="/images/logo-2.webp" alt="قمة الماركات العربية للتجارة (TBA)" />
                                </Link>

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded={isNavbarOpen}
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                    <ul className={`navbar-nav ${isArabic ? 'me-auto' : 'ms-auto'} py-4 py-md-0`}>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href={`/${lang}`}>{t.nav.home}</Link>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/about') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href={`/${lang}/about`}>{t.nav.about}</Link>
                                        </li>
                                        <li className={`nav-item dropdown ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/partners') ? 'active-link' : ''}`}>
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
                                                <Link className={`dropdown-item ${isActive('/partners/EL-SABOR') ? 'active' : ''}`} href={`/${lang}/partners/EL-SABOR`} onClick={closeDropdown}>
                                                    {isArabic ? 'إل سابور' : 'El Sabor'}
                                                </Link>
                                                <Link className={`dropdown-item ${isActive('/partners/Franui') ? 'active' : ''}`} href={`/${lang}/partners/Franui`} onClick={closeDropdown}>
                                                    {isArabic ? 'فرانوي' : 'Franui'}
                                                </Link>
                                                <Link className={`dropdown-item ${isActive('/partners/Legend') ? 'active' : ''}`} href={`/${lang}/partners/Legend`} onClick={closeDropdown}>
                                                    {isArabic ? 'نجوين ليجند' : 'Legend'}
                                                </Link>
                                                <Link className={`dropdown-item ${isActive('/partners/littel-donkey') ? 'active' : ''}`} href={`/${lang}/partners/littel-donkey`} onClick={closeDropdown}>
                                                    Little Donkey
                                                </Link>
                                                <Link className={`dropdown-item ${isActive('/partners/Marshzone') ? 'active' : ''}`} href={`/${lang}/partners/Marshzone`} onClick={closeDropdown}>
                                                    {isArabic ? 'مارشزون' : 'Marshzone'}
                                                </Link>
                                                <Link className={`dropdown-item ${isActive('/partners/Mr.Brownie') ? 'active' : ''}`} href={`/${lang}/partners/Mr.Brownie`} onClick={closeDropdown}>
                                                    {isArabic ? 'مستر براوني' : 'Mr Brownie'}
                                                </Link>
                                                <Link className={`dropdown-item ${isActive('/partners/Sweet-Pistachio') ? 'active' : ''}`} href={`/${lang}/partners/Sweet-Pistachio`} onClick={closeDropdown}>
                                                    {isArabic ? 'سويت بستاشيو' : 'Sweet Pistachio'}
                                                </Link>
                                                <Link className={`dropdown-item ${isActive('/partners/Vicenzi') ? 'active' : ''}`} href={`/${lang}/partners/Vicenzi`} onClick={closeDropdown}>
                                                    Matilde Vicenzi
                                                </Link>
                                                <Link className={`dropdown-item ${isActive('/partners/Trolli') ? 'active' : ''}`} href={`/${lang}/partners/Trolli`} onClick={closeDropdown}>
                                                    Trolli
                                                </Link>
                                            </div>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/products') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href={`/${lang}/products`}>{t.nav.products}</Link>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/blogs') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href={`/${lang}/blogs`}>{t.nav.blogs}</Link>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/faqs') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href={`/${lang}/faqs`}>{t.nav.faqs}</Link>
                                        </li>
                                        <li className={`nav-item ps-4 ps-md-0 ms-0 ms-md-4 ${isActive('/contact') ? 'active-link' : ''}`}>
                                            <Link className="nav-link" href={`/${lang}/contact`}>{t.nav.contact}</Link>
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
