'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const SubHero = ({ title, headerSubtitle = subtitle || "", subtitle, bgImage, bgImageAlt, breadcrumbs, details }) => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    useEffect(() => {
        // Reinitialize jarallax after component mounts
        if (typeof window !== 'undefined' && window.jQuery) {
            const initJarallax = () => {
                const $ = window.jQuery;
                if ($.fn.jarallax) {
                    $('.jarallax').jarallax({
                        speed: 0.2
                    });
                }
            };

            // Small delay to ensure scripts are loaded
            setTimeout(initJarallax, 100);
        }
    }, [bgImage]); // Reinit when image changes

    return (
        <section id="subheader" className="jarallax text-light" suppressHydrationWarning >
            <img src={bgImage} className="jarallax-img object-top" alt={bgImageAlt || title} style={{ objectPosition: "center top" }} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h5 className="uptitle">{headerSubtitle}</h5>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <ol className="breadcrumb flex-row-reverse">
                        {breadcrumbs ? (
                            breadcrumbs.map((crumb, index) => (
                                <li
                                    key={index}
                                    className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                                    aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                                >
                                    {crumb.link ? <Link href={crumb.link}>{crumb.label}</Link> : crumb.label}
                                </li>
                            ))
                        ) : (
                            !isRTL ? (
                                <div className="d-flex" dir='ltr'>
                                    <li className="breadcrumb-item"><Link href={`/${lang}`}>{t.nav.home}</Link></li>
                                    {
                                        details ? (
                                            <>
                                                <li className="breadcrumb-item active" aria-current="page"><Link href={details.link}>{subtitle}</Link></li>
                                                <li className="breadcrumb-item">{details.label}</li>
                                            </>
                                        ) : (
                                            <li className="breadcrumb-item active" aria-current="page">{subtitle}</li>
                                        )
                                    }
                                </div>
                            ) : (
                                <>
                                    {
                                        details ? (
                                            <>
                                                <li className="breadcrumb-item">{details.label}</li>
                                                <li className="breadcrumb-item active" aria-current="page"><Link href={details.link}>{subtitle}</Link></li>
                                            </>
                                        ) : (
                                            <li className="breadcrumb-item active" aria-current="page">{subtitle}</li>
                                        )
                                    }
                                    <li className="breadcrumb-item"><Link href={`/${lang}`}>{t.nav.home}</Link></li>
                                </>
                            )
                        )}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default SubHero;
