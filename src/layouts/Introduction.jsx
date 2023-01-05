import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import BuyNowButton from 'components/BuyNowButton';

function Introduction() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <Box
            sx={{
              height: '100%',
              backgroundColor: 'primary.main',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              backgroundColor: 'secondary.main',
              padding: 5,
            }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary.dark">
              Grab your watch
            </Typography>
            <Typography variant="h5" fontWeight="bold" mb={4} color="primary.dark">
              from us today!
            </Typography>
            <Typography variant="body1" lineHeight={2.5} fontSize={14} mb={8}>
              Watch fantasy assembled the desired wristwatches from scratch to accomplish your
              artistic fantasies with our professional and knowledgeable watch builders so that you
              can adorn your wrist with the one-of-a-kind creation that is uniquely yours.
            </Typography>

            <BuyNowButton width={200} />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Introduction;
