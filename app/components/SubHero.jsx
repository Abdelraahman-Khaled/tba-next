'use client';

import React, { useEffect } from 'react';

const SubHero = ({ title, subtitle, bgImage, breadcrumbs }) => {
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
        <section id="subheader" className="jarallax text-light" suppressHydrationWarning>
            <img src={bgImage} className="jarallax-img" alt={title} />
            <div className="container">
                <div className="row" dir="rtl">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h5 className="uptitle">{title}</h5>
                            <h1>{subtitle}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <ol className="breadcrumb">
                        {breadcrumbs ? (
                            breadcrumbs.map((crumb, index) => (
                                <li
                                    key={index}
                                    className={`breadcrumb-item ${index === 0 ? 'active' : ''}`}
                                    aria-current={index === 0 ? 'page' : undefined}
                                >
                                    {crumb.link ? <a href={crumb.link}>{crumb.label}</a> : crumb.label}
                                </li>
                            ))
                        ) : (
                            <>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                <li className="breadcrumb-item"><a href="/">الرئيسية</a></li>
                            </>
                        )}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default SubHero;
