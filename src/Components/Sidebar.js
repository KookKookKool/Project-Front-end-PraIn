import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

import './Sidebar.css';
import Pages1 from  '../Pages/Installment';
import Pages2 from  '../Pages/Interbanking';




import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCardIcon from '@mui/icons-material/AddCard';
import PaidIcon from '@mui/icons-material/Paid';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import WalletIcon from '@mui/icons-material/Wallet';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';




export default function TabsVertical() {
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      className="tabs-vertical"
    >
      <TabList className="tabs-vertical" style={{ marginTop:'2%'}}>
        <h4>Select Payment Chanal</h4>
        <Tab><CreditCardIcon/>Credit & Debit Card</Tab>
        <Tab><AddCardIcon/>Installment</Tab>
        <Tab><PaidIcon/>Pay With Points</Tab>
        <Tab><SmartphoneIcon/>Mobile Banking</Tab>
        <Tab><AccountBalanceIcon/>Internet Banking</Tab>
        <Tab><QrCodeScannerIcon/>QR PromptPay</Tab>
        <Tab><ReceiptLongIcon/>Bill Payment</Tab>
        <Tab><WalletIcon/>e-Wallet</Tab>
        <Tab><PointOfSaleIcon/>Kiosk Machine</Tab>
      </TabList>
      
      
      <TabPanel value={0}>
        หน้าที่สร้างอยู่ Menu : Installment, Internet Banking, และปุ่มในหน้า Internet Banking ที่ Design ออกมาอาจไม่เป๊ะ 100% เพราะเพิ่งเคยใช้ React.js ปกติเคยใช้แต่ HTML, CSS, Javascript. ขอบคุณสำหรับการพิจารณา

      </TabPanel>
      <TabPanel value={1}>
        <Pages1/>
      </TabPanel>
      <TabPanel value={2}>
        <b>3</b> tab panel
      </TabPanel>
       <TabPanel value={3}>
        <b>4</b> tab panel
      </TabPanel>
      <TabPanel value={4}>
      <Pages2/>
      </TabPanel>
      <TabPanel value={5}>
      <b>6</b> tab panel
      </TabPanel>
      <TabPanel value={6}>
        <b>7</b> tab panel
      </TabPanel>
      <TabPanel value={7}>
        <b>8</b> tab panel
      </TabPanel>
      <TabPanel value={8}>
        <b>9</b> tab panel
      </TabPanel>
    </Tabs>
  );
}