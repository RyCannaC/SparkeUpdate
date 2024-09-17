
import "/styles/globals.css";
import "/styles/calendar.css";

import Nav from "@/components/Nav";
import Footer from '@/components/Footer';

export const metadata = {
  title: "Spark-E Unlimited",
  description: "Sustainable Electrical Services",
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