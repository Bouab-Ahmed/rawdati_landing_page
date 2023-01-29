import React, { useState, createContext, useContext, useEffect } from 'react';
import api from '../api/translations';
const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const useLanguageUpdate = () => {
  return useContext(LanguageUpdateContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/${language}`);
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [language]);

  const toggleLanguage = (e) => {
    setLanguage(() => e);
  };

  return (
    <LanguageContext.Provider value={{ language, data }}>
      <LanguageUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};
