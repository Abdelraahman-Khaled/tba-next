'use client';

import React, { useEffect, useState, useRef } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathRef = useRef(null);

    useEffect(() => {
        const progressPath = pathRef.current;
        if (!progressPath) return;

        const pathLength = progressPath.getTotalLength();

        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        };

        const handleScroll = () => {
            updateProgress();
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
            onClick={scrollToTop}
        >
            <img src="/images/arrow-right.webp" alt="قمة الماركات العربية للتجارة (TBA)" loading="lazy" decoding="async" />
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    ref={pathRef}
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    suppressHydrationWarning
                />
            </svg>
        </div>
    );
};

export default ScrollToTop;
