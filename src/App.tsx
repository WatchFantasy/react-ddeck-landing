import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from 'layouts/Header';
import { theme } from 'constants/theme.constant';
import Introduction from 'layouts/Introduction';
import WhatsappFab from 'components/WhatsappFab';
import Footer from 'layouts/Footer';
import WhyChooseUs from 'layouts/WhyChooseUs';
import { Container } from '@mui/system';
import BackToTop from 'components/BackToTop';
import AboutDDeck from 'layouts/AboutDDeck';
import ProductGallery from 'layouts/ProductGallery';
import DDeckProduct from 'layouts/DDeckProduct';

function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <WhatsappFab />

      <Header />

      <Introduction />

      <Container maxWidth="lg">
        <DDeckProduct />
        <ProductGallery />
        <AboutDDeck />
        <WhyChooseUs />
      </Container>

      <BackToTop />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
