import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import eyeIcon from 'assets/icon/eye.png';
import premiumServicesIcon from 'assets/icon/premium-services.png';
import fastDeliveryIcon from 'assets/icon/fast-delivery.png';
import guaranteeIcon from 'assets/icon/guarantee.png';
import chatIcon from 'assets/icon/chat.png';
import BenefitCard from 'components/BenefitCard';
import { color } from 'constants/theme.constant';

const benefits = [
  {
    title: 'Professional Insights',
    description:
      'By demonstrating our most insightful and unique perspectives, we hope to inspire fantasy in your watches and help you stand out from the crowd.',
    icon: eyeIcon,
  },
  {
    title: 'Premium Quality',
    description:
      'From design to delivery, each component is manufactured and assembled with standard and professionalism.',
    icon: premiumServicesIcon,
  },
  {
    title: 'Free Shipping',
    description:
      'Please have a seat and wait for the completion of your latest master-piece. Free delivery right to your doorstep in entire Malaysia is available now.',
    icon: fastDeliveryIcon,
  },
  {
    title: '1 Year Waranty',
    description:
      "No worries. We've got your back. The watch mechanism is concealed. Terms and conditions applied.",
    icon: guaranteeIcon,
  },
  {
    title: 'Free Consultation',
    description:
      'Contact our watch specialists for free during business hours (Monday through Friday, 9:00 a.m. to 6:00 p.m.). Contact us immediately.',
    icon: chatIcon,
  },
];

const styles = {
  titleContainer: {
    width: '100%',
    height: 200,
    background: color.primary.dark,
    color: color.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function WhyChooseUs() {
  return (
    <React.Fragment>
      <Grid container spacing={5} mt={16}>
        <Grid item xs={12} sm={6} md={4}>
          <Box style={styles.titleContainer}>
            <Typography variant="h5" color="secondary.main" fontWeight="bold">
              Why Chooose Us?
            </Typography>
          </Box>
        </Grid>
        {benefits.map((benefit) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={benefit.title}>
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                key={benefit.title}
              />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default WhyChooseUs;
