import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={{marginLeft:'10%'}}
        required
        id="outlined-required"
        label="Name"
        defaultValue=""
      >
        </TextField>

      <TextField style={{marginLeft:'10%'}}
        required
        id="outlined-required"
        label="Lastname"
        defaultValue="">
        </TextField>

      <TextField style={{marginLeft:'10%'}}
        required
        id="outlined-required"
        label="Phone Number"
        defaultValue=""
      ></TextField>

      <TextField style={{marginLeft:'10%'}}
        required
        id="outlined-required"
        label="Email"
        defaultValue=""
      >
        </TextField>
    </Box>
  );
}
