import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import dot from 'assets/image/dot.png';

const styles = {
  decoBox: {
    left: -35,
    top: 50,
    width: 70,
    height: 150,
    background: '#84A98C',
    zIndex: 1000,
  },

  dot: {
    right: 35,
    top: -50,
    zIndex: 1000,
  },
};

function DDeckProduct() {
  return (
    <React.Fragment>
      <Grid container spacing={0} mt={16}>
        <Grid item md={7} position="relative" zIndex={1000}>
          <Box width="100%" height={343} sx={{ background: '#CAD2C5' }}></Box>
        </Grid>
        <Grid item md={5} position="relative">
          <Box position="absolute" style={styles.decoBox}></Box>
          <Box mt={8} ml={2} zIndex={1010} position="relative">
            <Typography variant="h4" color="primary.dark" fontWeight="bold">
              D'Deck
            </Typography>
            <Typography variant="body1" color="primary.dark">
              Series by Watch Fantasy
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} mt={-4}>
          <Box mt={8} mx={3} zIndex={1010} position="relative">
            <Typography variant="h4" color="primary.dark" fontWeight="bold" gutterBottom>
              ULTIMATE & UNIQUE
            </Typography>
            <Typography variant="body1" lineHeight={2.5}>
              D'Deck delivers ultimate and unique wristwatches with multiple creative combinations
              that render them rare and desirable. It also features an extraordinary appearance that
              is constructed using high quality and metallic components in order to revamp the watch
              completely that make you stand out in the crowd.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} mt={-8} position="relative" zIndex={900}>
          <Box position="absolute" style={styles.dot}>
            <img src={dot} alt="" width={100} />
          </Box>
          <Box width="100%" height={343} sx={{ background: '#D7E1D1' }}></Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DDeckProduct;
