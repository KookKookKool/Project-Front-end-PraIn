import * as React from 'react';
import Button from '@mui/material/Button';
import "../Components/Button.css";

export default function DisableElevation() {
  return (
    <Button id='btn1' variant="contained" disableElevation>
      Make Payment
    </Button>
  );
}