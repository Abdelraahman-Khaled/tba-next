'use client';

import React from 'react';

const HomeHero = () => {
    return (
        <section className="home position-relative z-index-1000">
            <video
                src="/images/TBA Hero Section Video Edit WebM.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            ></video>
        </section>
    );
};

export default HomeHero;
