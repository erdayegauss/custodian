import React, { useState, useEffect } from 'react';
import { Header, AccountTab, Tabs } from '../components';


import { Pie } from '../components';
import { ecomPieChartData } from '../data/dummy';


import Grid from '@mui/material/Unstable_Grid2';


const Accounts = () => {
    const [totalAmount, setTotalAmount] = useState(0);

    const setTotal = (amount) => {
        setTotalAmount(amount);
    }

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }


    return (
        <div className=" account ">

            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <Header category="" title="Vaults" />


                <div className="grid-container">

                </div>

                     <Tabs /> 

            </div>
        </div>
    );
};
export default Accounts;
