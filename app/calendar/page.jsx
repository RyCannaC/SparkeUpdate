'use client';

import Iframe from 'react-iframe'


const ReactCalendar = () => {
  

  return (
    <section className='w-full flex-center flex-col'>
      {/* <h1 className='head_text text-center'>
        <span className='orange_gradient text-center'>
          Spark-E Unlimited Electrical Inc.
        </span>
      </h1> */}
      <h3>
      
        <p className='h2_text orange_gradient text-center'>
          Please select a date below
        </p>
      <p className='desc text-center'>
          <br className='max-md:hidden' />
          Or use our <a href='/contactus' className='orange_gradient'>Contact US</a> page.
          <br className='max-md:hidden' />
        </p>

      </h3>
      

      
      <Box sx={{bgcolor:'white', marginBottom:isMobile ? 1 : 2, width:1}}>
                
        <Box sx={{paddingTop: 4, width: isMobile? '100%': '70%', margin: '0 auto', textAlign: 'left' }}>
          <Iframe 
            src='https://outlook.office365.com/owa/calendar/SparkEUnlimited@sparkeunlimitedelec.onmicrosoft.com/bookings/' 
            width='100%' 
            height='100%' 
            scrolling='yes' 
            style='border:0'/>
          </Box>
      </Box>
      
    </section>
  );
};

export default ReactCalendar;
