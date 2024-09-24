
import "/styles/globals.css";
import "/styles/calendar.css";

import Nav from "@/components/Nav";
import Footer from '@/components/Footer';

export const metadata = {
  title: "Spark-E Unlimited Electrical Inc. Providing exceptional electrical services and communication. From planning and cost assessments to quality assurance, we deliver projects on time and within budget.",
  description: "Providing sustainable electrical services for residential and commercial customers. We combine technical expertise with strong project management to provide top-tier electrical services for residential and commercial clients. Our founder's extensive experience as both a client-facing electrician and project manager ensures that every project is handled with professionalism, precision, and clear communication.",
  keywords: "electrical services, EV chargers, panel upgrades, standby generators, energy-efficient installations, fire alarm, commercial, residential"
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <Footer/>
        </main>
    </body>
  </html>
);

export default RootLayout;