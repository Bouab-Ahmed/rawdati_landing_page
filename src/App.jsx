import React from 'react';
import './App.css';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Announcements from './components/announcements/Announcements';
import Section from './components/section/Section';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';

const App = () => {
  const { language, data } = useLanguage();

  return (
    <div className='app' dir={language === 'arabic' ? 'rtl' : 'ltr'}>
      <nav className='app-header'>
        <Navbar />
      </nav>
      <header>
        <Hero />
      </header>
      <main>
        <section>
          <Announcements />
        </section>
        {/* nurseries */}
        <Section
          data={data?.nurseries}
          imgFirst={true}
          sectionTitle='nurseries'
        />
        {/* jobs */}
        <Section data={data?.jobs} sectionTitle='jobs' />
        {/* store */}
        <Section data={data?.store} imgFirst={true} sectionTitle='store' />
        <Section data={data?.consultation} sectionTitle='consultation' />
        <Login data={data?.login} />
        <Footer data={data?.footer} />
      </main>
    </div>
  );
};

export default App;
