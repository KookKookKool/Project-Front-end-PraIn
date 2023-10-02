import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '../Components/Header.css'


    const Header = () => {
        return (
          <div className="header">
            <div className="header-left">
              <img src="/CpnLogo.png" alt="Logo" />
              <div className='Boxheader'>
                <h2 id='cpmtext'>PlaIn Fintech</h2>
                <div id='logoheaderline'>
                <PhoneIcon/><p id="logo-tagline"> 021077788-1</p>
                <EmailIcon/><p id="logo-tagline"> napak@prainfintech.com</p>
                </div>
              </div>
            </div>
            <div className="header-right">
              <img src="/TH.png" alt="LanguageTH Logo" />
              <img src="/EN.png" alt="LanguageEN Logo" />
            </div>
          </div>
        );
      };
      
      export default Header;