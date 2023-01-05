import React from 'react';
import { Fab } from '@mui/material';
import whatsapp from 'assets/icon/whatsapp.png';

function WhatsappFab() {
  return (
    <React.Fragment>
      <Fab
        color="primary"
        sx={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
        }}
      >
        <a href="http://wa.link/54wlfy" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="whatsapp-icon" width={60} />
        </a>
      </Fab>
    </React.Fragment>
  );
}

export default WhatsappFab;
