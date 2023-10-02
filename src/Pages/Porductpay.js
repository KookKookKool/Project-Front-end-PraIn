import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Btn from '../Components/Button2'

export default function Porductpay() {
  return (
    <div style={{ marginTop: '40%', display: 'flex',width:'102%', height: '272px', borderTop: '2px solid #ccc' }}>
      <div style={{ height: '278px', width: '35%', borderRight: '2px solid #ccc' }}>

        <div style={{ display:'flex' }}>
      <img src="pd.png" alt="Description" className="product" style={{ marginLeft: '10px' }} /> 
<div style={{ display:'row' }}>

      <p style={{ marginLeft: '4px' }}>  Product / Service</p>
      <b>รองเท้า</b>

      
      </div>
  

      </div>
      <p style={{ marginLeft: '4px',display:'row' }}> Description</p>
      <b>รองเท้าน่ารัก</b>
      </div>


      <div style={{ height: '200px', width: '25%',marginLeft:'10px', }}>

      <div style={{ display:'row' }}>
        <p>Subtotal</p>
        <h2>3,333.00 THB</h2>
        <p>Payment Free</p>
        <h3>0.00 THB</h3>
        </div>



      </div>



      <div style={{ height: '200px', width: '40%',paddingLeft:'2px' }}>

      <div style={{ display:'row' }}>

        <p>Total Amount</p>
        <Btn/>

        <p style={{color:'red'}}>Please Fill your information completely</p>
        <FormGroup>
    <FormControlLabel
      required
      control={<Checkbox />}
      label={
        <>
          I have read and accept the&nbsp;
          <a href="ลิงค์ของเงื่อนไข" target="_blank" rel="noopener noreferrer">
            terms & conditions
          </a>
          &nbsp;of ChillPay
        </>
      }
    />
  </FormGroup>
        </div>



      </div>
    </div>
  );
}
