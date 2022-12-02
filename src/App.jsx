import React from 'react';
import './App.css';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const App = () => {
  const { language } = useLanguage();

  return (
    <div className='app' dir={language === 'arabic' ? 'rtl' : 'ltr'}>
      <nav className='app-header'>
        <Navbar />
      </nav>
      <header>
        <Hero />
      </header>
    </div>
  );
};

export default App;
