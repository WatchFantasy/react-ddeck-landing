import React from 'react';
import { Box, Typography } from '@mui/material';
import { color } from 'constants/theme.constant';

const styles = {
  card: {
    border: `3px solid ${color.primary.dark}`,
    width: '100%',
    height: 200,
  },

  icon: {
    position: 'absolute',
    top: -30,
    right: 20,
    width: 50,
    height: 50,
    margin: 5,
    background: '#F8F8F8',
    padding: 10,
  },
};

// @ts-ignore
function BenefitCard({ title, description, icon }) {
  return (
    <React.Fragment>
      <Box p={3} position="relative" style={styles.card}>
        <img src={icon} alt={`${title.toLowerCase()} icon`} style={styles.icon} />
        <Typography variant="h6" color="primary.main" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" lineHeight={2}>
          {description}
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default BenefitCard;
