
import React from 'react'; 
import { Button } from 'primereact/button';
import "./btnStyle.css";
import "../Pages/Interbanking.css"
import Textfill  from "../Pages/Textfill";
import Productpay from "../Pages/Porductpay"


import "primereact/resources/themes/lara-light-indigo/theme.css";


        
        

export default function RaisedTextDemo() {
    return (
<>
<div  style= {{display: 'flex',
        flexDirection: 'column',}}>

             <div style={{ display: "flex" }}>
            <div className="card flex flex-wrap justify-content-center gap-3" style={{maxWidth: '86%',width: '500px', marginTop:'10%', borderRight: '2px solid #ccc' }}>
            
              <Button  severity="secondary" text raised style={{ marginRight: '16px', marginBottom: '16px',  width: '46%', }}>
             <img src="KTB.png" alt="Description" className="button-image" style={{ marginLeft: '10px' }} />
             <div style={{ paddingLeft: '24px',}}>
              <p> Krunthai Bank</p>
              </div>
            </Button>
            <Button  severity="secondary" text raised style={{ marginRight: '16px', marginBottom: '16px',  width: '46%', }}>
             <img src="SCB.png" alt="Description" className="button-image" style={{ marginLeft: '10px' }} />
             <div style={{ paddingLeft: '24px',}}>
              <p> SCB</p>
              </div>
            </Button>
            
            <Button  severity="secondary" text raised style={{ marginRight: '16px', marginBottom: '16px',  width: '46%', }}>
             <img src="BKK.png" alt="Description" className="button-image" style={{ marginLeft: '10px' }} />
             <div style={{ paddingLeft: '24px',}}>
              <p> Bangkok Bank</p>
              </div>
            </Button>

            
            <Button  severity="secondary" text raised style={{ marginRight: '16px', marginBottom: '16px',  width: '46%', }}>
             <img src="KsriCard.png" alt="Description" className="button-image" style={{ marginLeft: '10px' }} />
             <div style={{ paddingLeft: '24px',}}>
              <p> Krungsri Bank</p>
              </div>
            </Button>
            
            <Button  severity="secondary" text raised style={{ marginRight: '16px', marginBottom: '16px',  width: '46%', }}>
             <img src="ttb.png" alt="Description" className="button-image" style={{ marginLeft: '10px' }} />
             <div style={{ paddingLeft: '24px',}}>
              <p> TTB Bank</p>
              </div>
            </Button>
        </div>

        <div>
           <h4 style={{ marginTop:'14%'}}> Fill Contact Information</h4>
       

        <div style={{marginTop:'-4%', marginLeft:'5%'}}>
         

         </div>

         <Textfill/>
         </div>
         </div>

         <div>
         <Productpay />
         </div>

 </div>
        </>
    )
}


        