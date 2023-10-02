import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: '1 Months / 0.00%', code: 'one' },
        { name: '2 Months / 0.00%', code: 'two' },
        { name: '3 Months / 0.65%', code: 'three' },
        { name: '4 Months / 0.00%', code: 'four' },
        { name: '5 Months / 0.00%', code: 'five' },
        { name: '6 Months / 0.65%', code: 'six' },
        { name: '7 Months / 0.00%', code: 'seven' },
        { name: '8 Months / 0.00%', code: 'eight' },
        { name: '9 Months / 0.65%', code: 'nine' },
        { name: '10 Months / 0.00%', code: 'ten' },
        { name: '11 Months / 0.00%', code: 'eleven' },
        { name: '12 Months / 0.65%', code: 'twelve' },
    ];


        return (
            <div className="card flex justify-content-center">
                <Dropdown 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.value)} 
                options={cities} 
                optionLabel="name" 
                placeholder="Select a City" 
                className="w-full md:w-14rem" 
                style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", border: "none" }}
            />
            </div>
        )
}