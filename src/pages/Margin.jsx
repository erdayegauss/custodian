import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';

import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import SellIcon from '@mui/icons-material/Sell';
import PhoneIcon from '@mui/icons-material/Phone';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';


import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  //  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('16% APR Fixed Earn', '10d', "6.0%", 24, 4.0),
  createData('16% APR Fixed Earn', '10d', "9.0%", 37, 4.3),
  createData('16% APR Fixed Earn', '10d', "16.0%", 24, 6.0),
  createData('16% APR Fixed Earn', '10d', "3.7%", 67, 4.3),
  createData('16% APR Fixed Earn', '90d', "16.0%", 49, 3.9),
];








const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const Margin = () => {



  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  function handleOptionClick(option) {
    setSelectedOption(option);
  }



  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [value1, setValue1] = React.useState('1');
  const handleChange1 = (event, newValue1) => {
    setValue1(newValue1);
  };

  const [value2, setValue2] = React.useState('1');
  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  return (


    <div className="">

      <Grid container spacing={2}>
        <Grid container lg={12} spacing={2} >



          <div style={{  position: "relative", width: "100%",  height: "1150px", overflow: "hidden",}}>
            <iframe style={{ position: "relative", top:"-4%", width: "100%",  height: "100%", overflow: "hidden", }} src="/trading/trade.html" title="trading"></iframe>
          </div>

        </Grid>



      </Grid>
    </div>
  );

};
export default Margin;
