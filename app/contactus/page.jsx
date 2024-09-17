'use client';
import ContactCard from '@/components/ContactCard';
import ContactUSFooter from '@/components/ContactUSFooter';

const ContactUs = () => {
  const contactPage = true;
  return (
    <>
    
      <section className='mb-6 w-full flex-center flex-col'>
        <h1 className='h2_text text-center'>
          <p className='orange_gradient text-center mb-6'>
          Contact Us
         </p>
        </h1>
        <ContactUSFooter contactpage = {contactPage} />
        <ContactCard/> 
      </section>
           
  
    </>
    
  );
};

export default ContactUs;
