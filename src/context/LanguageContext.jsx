import React, { useState, createContext, useContext, useEffect } from 'react';
import api from '../api/translations';
const LanguageContext = createContext();
const LanguageUpdateContext = createContext();
const loginContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const useLanguageUpdate = () => {
  return useContext(LanguageUpdateContext);
};

export const useLoginData = () => {
  return useContext(loginContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');
  const [data, setData] = useState(null);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/${language}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [language]);

  const toggleLanguage = (e) => {
    setLanguage(() => {});
  };

  const handleLogin = (e) => {
    const { email, password } = e;
    setLogin(() => ({ email, password }));
  };

  return (
    <LanguageContext.Provider value={{ language, data }}>
      <LanguageUpdateContext.Provider value={toggleLanguage}>
        <loginContext.Provider value={{ login, handleLogin }}>
          {children}
        </loginContext.Provider>
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};
