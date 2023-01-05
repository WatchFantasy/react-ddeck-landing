import React from 'react';
import Grid from '@mui/material/Grid';
import ddeckFullProduct from 'assets/image/ddeck-full-product.jpg';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const styles = {
  decoBox: {
    right: -30,
    top: 50,
    width: 70,
    height: 150,
    background: '#84A98C',
  },
};

function AboutDDeck() {
  return (
    <React.Fragment>
      <Grid container spacing={2} mt={4} px={{ xs: 3, sm: 10 }}>
        <Grid item xs={12} height={150} display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h6">About D'Deck Series</Typography>
        </Grid>
        <Grid item xs={12} md={5} position="relative">
          <img src={ddeckFullProduct} alt="" width="100%" />
          <Box
            position="absolute"
            style={styles.decoBox}
            sx={{ display: { xs: 'none', md: 'block' } }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="body1" lineHeight={2.5} pl={{ xs: 0, md: 5 }}>
            There are a total of three D'Deck watches, including the special edition Marble White
            from 2023. They are automatic mechanical timepieces. Each component of D'Deck watches,
            including the dial, hands, and bezel, was meticulously selected after a market analysis
            in Malaysia revealed that they are rare yet highly desirable. In order to bring you a
            well-built watch, each timepiece was professionally assembled by our watch specialists
            and passed multiple quality checks.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AboutDDeck;
