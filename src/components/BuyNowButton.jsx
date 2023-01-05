import React from 'react';
import { color } from 'constants/theme.constant';
import { Button } from '@mui/material';

const styles = {
  buyNowButton: {
    borderRadius: 0,
    border: `2px solid ${color.primary.main}`,
    color: color.primary.dark,
  },

  buyNowButtonHover: {
    '&:hover': {
      background: color.primary.main,
      color: '#fff !important',
    },
  },
};

// @ts-ignore
function BuyNowButton({ width, ...other }) {
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="large"
        style={{ width, ...styles.buyNowButton }}
        sx={styles.buyNowButtonHover}
        {...other}
      >
        Order now
      </Button>
    </React.Fragment>
  );
}

export default BuyNowButton;
