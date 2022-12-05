import React from 'react';
import './App.css';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Announcements from './components/announcements/Announcements';
import Nursersies from './components/nurseries/Nursersies';
import Jobs from './components/jobs/Jobs';
import Store from './components/store/Store';

const App = () => {
  const { language } = useLanguage();

  return (
    <div className='app' dir={language === 'arabic' ? 'rtl' : 'ltr'}>
      <div className='app-header'>
        <Navbar />
      </div>
      <header>
        <Hero />
      </header>
      <section>
        <Announcements />
      </section>
      <section>
        <Nursersies />
      </section>
      <section>
        <Jobs />
      </section>
      <section>
        <Store />
      </section>
    </div>
  );
};

export default App;
