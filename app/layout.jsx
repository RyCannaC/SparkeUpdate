import "/styles/globals.css";
import "/styles/calendar.css";
import { Box, Container } from '@mui/material';
import Nav from "@/components/Nav";
import Footer from '@/components/Footer';

export const metadata = {
  title: "Spark-E Unlimited Electrical Inc. From planning and cost assessments to quality assurance, we deliver projects on time and within budget.",
  description: "Providing sustainable electrical services for residential and commercial customers. Our founder's extensive experience as both a client-facing electrician and project manager ensures that every project is handled with professionalism, precision, and clear communication.",
  keywords: "electrical services, EV chargers, panel upgrades, standby generators, energy-efficient installations, fire alarm, commercial, residential"
};

const RootLayout = ({ children }) => (
  <html lang="en" suppressHydrationWarning={true}>
    <body>
      

      {/* Black Overlay */}
      <Box
        sx={{
          backgroundColor: 'black',
          background: 'radial-gradient(circle, rgba(2, 0, 10, 0.8) 0%, black 100%)',
          position: 'absolute',
          zIndex: 2, // Ensures it layers above the radial gradient
          width: '100%',
          height: '100%',
          top: 0,
        }}
        className = 'main'
      >
        {/* Background Gradient */}
      <Box
        sx={{
          height: 'fit-content',
          zIndex: 3,
          width: '100%',
          maxWidth: '640px',
          backgroundImage: `
            radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
            radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
            radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
            radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
            radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
            radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)
          `,
          position: 'absolute',
          width: '100%',
          height: '100%',
          filter: 'blur(100px) saturate(150%)',
          top: '80px',
          opacity: 0.15,
        }}
        className = 'gradient'
      />
</Box>
      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 10, // Ensures it layers above both gradients
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, sm: 6 }, // Responsive padding
          mx: 'auto',
          minHeight: '100vh', // Ensures content covers the full height of the viewport
        }}
      >
        <Nav />
        <Box sx={{ flexGrow: 1, width: '100%' }}>{children}</Box>
        <Footer />
      </Container>
      
    </body>
  </html>
);

export default RootLayout;
