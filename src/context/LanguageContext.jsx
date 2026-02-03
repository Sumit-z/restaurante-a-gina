import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('pt');

    const t = (path) => {
        const keys = path.split('.');
        let value = translations[lang];

        for (const key of keys) {
            if (value[key] === undefined) {
                console.warn(`Translation key not found: ${path}`);
                return path;
            }
            value = value[key];
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
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
