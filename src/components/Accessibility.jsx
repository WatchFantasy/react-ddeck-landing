import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
  Switch,
} from '@mui/material';
import React from 'react';
import ArrowDown from 'assets/icon/arrow-down.svg';

const styles = {
  accordion: {
    marginTop: 16,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
};

function Accessibility() {
  return (
    <React.Fragment>
      <Accordion style={styles.accordion}>
        <AccordionSummary
          expandIcon={<img src={ArrowDown} alt="arrow-down-icon" width={15} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accessibility</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 16px' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1" fontWeight="bold">I'm Malaysian</Typography>
            <Switch color='primary' />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}

export default Accessibility;
