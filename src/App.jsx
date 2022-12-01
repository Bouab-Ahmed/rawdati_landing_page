import React from 'react';
import './App.css';
import { useLanguage } from './context/LanguageContext';
import Test from './components/Test';

const App = () => {
  const { language } = useLanguage();

  return (
    <div dir={language === 'arabic' ? 'rtl' : 'ltr'}>
      <Test />
    </div>
  );
};

export default App;
