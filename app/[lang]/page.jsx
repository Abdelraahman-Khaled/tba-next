'use client';

import React from 'react';
import HomeHero from './components/Home/HomeHero';
import AboutSection from './components/Home/AboutSection';
import VisionMissionValues from './components/Home/VisionMissionValues';
import ServicesSection from './components/Home/ServicesSection';
import PartnersSection from './components/Home/PartnersSection';
import BrandsSection from './components/Home/BrandsSection';
import GlobalPartnerships from './components/Home/GlobalPartnerships';
import GallerySection from './components/Home/GallerySection';
import ProductsSection from './components/Home/ProductsSection';
import CTASection from './components/Home/CTASection';
import WhyUsSection from './components/Home/WhyUsSection';
import ReviewsSection from './components/Home/ReviewsSection';
import BlogsSection from './components/Home/BlogsSection';
import { useLanguage } from './context/LanguageContext';

export default function HomePage() {
    const { t, lang } = useLanguage();

    return (
        <>
            <HomeHero />
            <div id="wrapper" className="position-relative">
                <div id="content" className="no-bottom no-top">
                    <AboutSection t={t} lang={lang} />
                    <VisionMissionValues t={t} lang={lang} />
                    <ServicesSection t={t} lang={lang} />
                    <PartnersSection t={t} lang={lang} />
                    <BrandsSection t={t} lang={lang} />
                    <GlobalPartnerships t={t} lang={lang} />
                    <GallerySection t={t} lang={lang} />
                    <ProductsSection t={t} lang={lang} />
                    <CTASection t={t} lang={lang} />
                    <WhyUsSection t={t} lang={lang} />
                    <ReviewsSection t={t} lang={lang} />
                    <BlogsSection t={t} lang={lang} />
                </div>
            </div>
        </>
    );
}
