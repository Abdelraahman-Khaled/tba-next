import React from 'react';
import SubHero from '../components/SubHero';
import Introduction from '../components/About/Introduction';
import History from '../components/About/History';
import Features from '../components/About/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const AboutPage = () => {
    return (
        <div id="content" className="no-bottom no-top text-end">
            <SubHero
                title="من نحن"
                subtitle="جودة استثنائية، وسنوات من الخبرة في استيراد وتوزيع العلامات التجارية العالمية الفاخرة"
                bgImage="/images/bg-3.webp"
            />
            <Introduction />
            <Features />
            <CTA />
            <History />
            <Testimonials />
        </div>
    );
};

export default AboutPage;
