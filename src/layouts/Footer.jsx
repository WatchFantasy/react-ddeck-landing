import React from 'react';
import Grid from '@mui/material/Grid';
import AppLogo from 'components/AppLogo';
import Typography from '@mui/material/Typography';
import AppSocialMedia from 'components/AppSocialMedia';
import Accessibility from 'components/Accessibility';

const styles = {
  footer: {
    backgroundColor: '#E5E5E5',
  },
};

function Footer() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={{ xs: 2, sm: 0 }}
        px={{ xs: 5, sm: 10 }}
        pt={{ xs: 5, sm: 5 }}
        pb={{ xs: 3, sm: 0 }}
        style={styles.footer}
      >
        <Grid item xs={12} sm={5} md={3}>
          <AppLogo />
          <Accessibility />
        </Grid>
        <Grid item xs={0} sm={2} md={5}></Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Typography variant="h6" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="body1">
            Reach out anytime. We are just an inbox message away!
          </Typography>
          <AppSocialMedia isFullDetailed={false} />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" my={{ xs: 0, sm: 3 }}>
          <Typography variant="caption">
            &copy; Copyright 2023. Watch Fantasy Enterprise (202203289619), Malaysia. All Rights
            Reserved.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Footer;
