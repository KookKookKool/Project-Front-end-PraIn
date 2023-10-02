import React from 'react';
import Button from '@mui/material/Button';

const Btn = () => {
  const handleOpenHTMLFile = () => {
    // สำหรับตัวอย่างนี้, ถ้าไฟล์ HTML อยู่ที่ public/Success.html
    const htmlFilePath = process.env.PUBLIC_URL + '/Success.html';
    window.open(htmlFilePath);
  };

  return (
    <Button id='btn2' onClick={handleOpenHTMLFile} variant="contained" disableElevation style={{ display: 'row' }}>
      <div style={{ marginTop: '14px' }}>
        1662 DAYS:09:05:50<br />
        <h3>3,333.00 THB</h3>
      </div>
    </Button>
  );
}

export default Btn;