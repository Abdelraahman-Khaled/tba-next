'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setIsVisible(false);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Failsafe timeout to ensure preloader hides even if load event misses or fails
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // 3 seconds failsafe

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div id="preloader">
            <div className="preloader1"></div>
        </div>
    );
}
