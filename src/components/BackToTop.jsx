import { Box } from '@mui/material';
import { color } from 'constants/theme.constant';
import React from 'react';
import arrowUp from 'assets/icon/arrow-up.png'

const styles = {
  box: {
    backgroundColor: color.secondary.main,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
};

function onBackToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function BackToTop() {
  return (
    <React.Fragment>
      <Box width="100%" height={60} style={styles.box} onClick={onBackToTop} mt={8}>
        <img src={arrowUp} alt="" width={40} title="Scroll back to top" />
      </Box>
    </React.Fragment>
  );
}

export default BackToTop;
