import React from 'react';
import './App.css';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/forms/loginForm/LoginForm';
import LandingPage from './pages/landing/LandingPage';
import Register from './pages/register/Register';
import Home from './pages/home/Home';

const App = () => {
  const { language, data } = useLanguage();

  return (
    <div className='app' dir={language === 'arabic' ? 'rtl' : 'ltr'}>
      <nav className='app-header'>
        <Navbar />
      </nav>
      <Routes>
        <Route path='/' element={<LandingPage data={data} />} />
        <Route path='/register/:name' element={<Register />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
      <Footer data={data?.footer} language={language} />
    </div>
  );
};

export default App;
