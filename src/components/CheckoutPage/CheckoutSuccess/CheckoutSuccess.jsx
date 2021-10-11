import React from 'react';
import { Typography, Button } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for signing up!
      </Typography>
      <Button style={{ backgroundColor: '#21e6c1' }}> View your Score </Button>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
