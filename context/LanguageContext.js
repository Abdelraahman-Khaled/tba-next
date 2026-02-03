"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage = 'ar' }) => {
    const [language, setLanguage] = useState(initialLanguage);

    useEffect(() => {
        const savedLang = localStorage.getItem('appLang');
        if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
            setLanguage(savedLang);
        }
    }, []);
    1
    useEffect(() => {
        // Update HTML attributes
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

        // Persist language choice
        localStorage.setItem('appLang', language);

        // Update body class for legacy scripts (like main.js)
        if (language === 'ar') {
            document.body.classList.add('arabic');
        } else {
            document.body.classList.remove('arabic');
        }
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
