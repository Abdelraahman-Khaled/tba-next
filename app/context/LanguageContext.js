"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import arTranslations from "../i18n/locales/ar.json";
import enTranslations from "../i18n/locales/en.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLang = "ar" }) => {
  const [lang, setLang] = useState(initialLang);
  const [t, setT] = useState(
    initialLang === "ar" ? arTranslations : enTranslations,
  );
  const router = useRouter();

  const updateDocumentAttributes = (newLang) => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = newLang === "ar" ? "ltr" : "rtl";
      document.documentElement.lang = newLang;
    }
  };

  const setLanguage = React.useCallback(
    (newLang) => {
      setLang(newLang);
      setT(newLang === "ar" ? arTranslations : enTranslations);
      localStorage.setItem("language", newLang);

      // Update cookie for server-side persistence
      document.cookie = `language=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

      updateDocumentAttributes(newLang);
      router.refresh();
    },
    [router],
  );

  useEffect(() => {
    // Load language from localStorage if available (sync client-side)
    const savedLang = localStorage.getItem("language");
    if (savedLang && savedLang !== lang) {
      setLanguage(savedLang);
    } else {
      // Ensure document attributes are set on initial load
      // eslint-disable-next-line react-hooks/exhaustive-deps
      updateDocumentAttributes(lang);
    }
  }, [lang, setLanguage]);

  return (
    <LanguageContext.Provider value={{ lang, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
