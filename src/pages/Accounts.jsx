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
                     <Tabs /> 

        </div>
    );
};
export default Accounts;
