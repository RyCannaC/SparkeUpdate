'use client';
import ContactCard from '@/components/ContactCard';
import ContactUSFooter from '@/components/ContactUSFooter';
import { useState } from 'react';

const ContactUs = () => {
  const [displayButton, setDisplayButton] = useState(true); // Initialize as boolean
  return (
    <>
    
      <section className='mb-6 w-full flex-center flex-col'>
        <h1 className='h2_text text-center'>
          <p className='orange_gradient text-center mb-6'>
          Contact Us
         </p>
        </h1>
        <ContactUSFooter contactPage={displayButton} />
        <ContactCard/> 
      </section>
           
  
    </>
    
  );
};

export default ContactUs;
