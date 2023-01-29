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
import Verify from './pages/verification/Verify';
import PostDetails from './pages/postDetails/PostDetails';
import About from './pages/about/About';
import Profile from './pages/profile/Profile';
import ContactUs from './pages/contact/ContactUs';

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
        <Route path='/verification' element={<Verify />} />
        <Route path='post/:id' element={<PostDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer data={data?.footer} language={language} />
    </div>
  );
};

export default App;
