import React, { useState} from 'react';
import {  TabsAsset } from '../components';




const Assets = () => {
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
                     <TabsAsset /> 

        </div>
    );
};
export default Assets;
