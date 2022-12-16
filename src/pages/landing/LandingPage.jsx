import React from 'react';
import Hero from '../../components/hero/Hero';
import Announcements from '../../components/announcements/Announcements';
import Section from '../../components/section/Section';
import Login from '../../components/login/Login';

const LandingPage = ({ data }) => {
  return (
    <div className='landing_page'>
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
        <Login data={data?.login} usersData={data?.users} />
      </main>
    </div>
  );
};

export default LandingPage;
