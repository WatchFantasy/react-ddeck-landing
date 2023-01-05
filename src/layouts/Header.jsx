import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import AppLogo from 'components/AppLogo';
import AppSocialMedia from 'components/AppSocialMedia';

function Header() {
  return (
    <React.Fragment>
      <Grid container spacing={0} p={3} pr={5}>
        <Grid item xs={0} sm={4}></Grid>

        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={{ xs: 0, sm: 2, md: 10 }}
          mb={{ xs: 3, sm: 0 }}
        >
          <AppLogo />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          justifyContent={{ xs: 'center', sm: 'end' }}
          alignItems="center"
        >
          <AppSocialMedia isFullDetailed />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Header;
