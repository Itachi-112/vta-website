// pages/contact.js

import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import CallbackForm from '../components/Callbackform';

const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <CallbackForm/>
    </main>
  );
};

export default ContactPage;