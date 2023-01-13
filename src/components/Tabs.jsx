import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { fiatData, vaultData, exchangeData, FiatData, vaultGrid, exchangeGrid, fiatGrid, iconData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Ajax } from '@syncfusion/ej2-base';
import { Pie } from '.';



import binance from '../data/binance.png'
import bitstamp from '../data/bitstamp.png'
import deribit from '../data/deribit.png'
import Safeguard1 from '../data/Safeguard.png'
import safty from "../data/safty.png"
import Grid from '@mui/material/Unstable_Grid2';

import { CollapsePage, Appbar, Transfer, AddAccount } from '../components';
import { ecomPieChartData } from '../data/dummy';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import { Header } from '../components';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import SendIcon from '@mui/icons-material/Send';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import fiatIcon from '../data/fiat.png'
import exchangeIcon from '../data/exchange.png'


import bitcoin from '../data/bitcoin.png'
import ethereum from '../data/ethereum.png'
import tether from '../data/tether.png'
import usdc from '../data/usdc.png'
import xrp from '../data/xrp.png'
import bnb from '../data/bnb.png'
import cardano from '../data/cardano.png'
import solana from '../data/solana.png'
import dogecoin from '../data/dogecoin.png'
import dai from '../data/dai.png'
import litecoin from '../data/litecoin.png'

const Vault1 = [[
  {
    image: HealthAndSafetyIcon, name: "Autocall fund", amount: "1,000,000", status: "active", statusBg: "#8BE78B", updateAt: "2022-10-21", Accounts: [
      {
        BTC: "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
        ETH: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
        USDT: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
        USDC: "0xdcef968d416a41cdac0ed8702fac8128a64241a2",
        XRP: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
        LTC: "M8T1B2Z97gVdvmfkQcAtYbEepune1tzGua",
        BNB: "0xf977814e90da44bfa03b6295a0616a897441acec",
        Doge: "DPDLBAe3RGQ2GiPxDzhgjcmpZCZD8cSBgZ",
        SOL: "BQeizWYD2dHmQq1b6HQqwBPrLWKitnhv5K82ZnRNPL8z",
        ADA: "Ae2tdPwUPEYwFx4dmJheyNPPYXtvHbJLeCaA96o6Y2iiUL18cAt7AizN2zG",
      },]
  },],
[
  {
    image: HealthAndSafetyIcon, name: "Option BTC", amount: "1,000,000", status: "active", statusBg: "#8BE78B", updateAt: "2022-10-21", Accounts: [
      {
        BTC: "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
        ETH: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
        USDT: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
        USDC: "0xdcef968d416a41cdac0ed8702fac8128a64241a2",
        XRP: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
        LTC: "M8T1B2Z97gVdvmfkQcAtYbEepune1tzGua",
        BNB: "0xf977814e90da44bfa03b6295a0616a897441acec",
        Doge: "DPDLBAe3RGQ2GiPxDzhgjcmpZCZD8cSBgZ",
        SOL: "BQeizWYD2dHmQq1b6HQqwBPrLWKitnhv5K82ZnRNPL8z",
        ADA: "Ae2tdPwUPEYwFx4dmJheyNPPYXtvHbJLeCaA96o6Y2iiUL18cAt7AizN2zG",
      },]
  },],

[
  {
    image: HealthAndSafetyIcon, name: "Option ETH", amount: "1,000,000", status: "active", statusBg: "#8BE78B", updateAt: "2022-10-21", Accounts: [
      {
        BTC: "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
        ETH: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
        USDT: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
        USDC: "0xdcef968d416a41cdac0ed8702fac8128a64241a2",
        XRP: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
        LTC: "M8T1B2Z97gVdvmfkQcAtYbEepune1tzGua",
        BNB: "0xf977814e90da44bfa03b6295a0616a897441acec",
        Doge: "DPDLBAe3RGQ2GiPxDzhgjcmpZCZD8cSBgZ",
        SOL: "BQeizWYD2dHmQq1b6HQqwBPrLWKitnhv5K82ZnRNPL8z",
        ADA: "Ae2tdPwUPEYwFx4dmJheyNPPYXtvHbJLeCaA96o6Y2iiUL18cAt7AizN2zG",
      },]
  },],

]

let datatmp = [
  { image: Safeguard1, name: "Quant Vault", amount: "1,000,000" },
  { image: Safeguard1, name: "Autocall Vault", amount: "560,010" },
  { image: Safeguard1, name: "Options Vault", amount: "790,000" },
  { image: Safeguard1, name: "Grid Vault", amount: "45,000" },
  { image: Safeguard1, name: "Dual currency Vault", amount: "120,000" },
  { image: Safeguard1, name: "Snowball Vault", amount: "103,000" },
  { image: Safeguard1, name: "Fix income Vault", amount: "100,001" },

];
let datatmp1 = [
  { image: deribit, name: "Deribit", amount: "560,010" },
  { image: binance, name: "Binance", amount: "790,000" },
  { image: bitstamp, name: "Bitstamp", amount: "145,000" },

];


function createData(name, amount, image) {
  return {
    name,
    amount,
    image,

    details: [
      {
        damount: '$12.32M',
        address: '34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo',
        title: "BTC",
        dimage: bitcoin
      },
      {
        damount: '$3.43M',
        address: '0xda9dfa130df4de4673b89022ee50ff26f6ea73cf',
        title: "ETH",
        dimage: ethereum,
      },
      {
        damount: '$9.87M',
        address: '0x5a52e96bacdabb82fd05763e25335261b270efcb',
        title: "USDT",
        dimage: tether,
      },
      {
        damount: '$15.20K',
        address: '0xdcef968d416a41cdac0ed8702fac8128a64241a2',
        title: "USDC",
        dimage: usdc,
      },
      {
        damount: '$4.56K',
        address: '0x5a52e96bacdabb82fd05763e25335261b270efcb',
        title: "XRP",
        dimage: xrp,
      },
      {
        damount: '$7.14K',
        address: 'M8T1B2Z97gVdvmfkQcAtYbEepune1tzGua',
        title: "LTC",
        dimage: litecoin,
      },
      {
        damount: '$16.22K',
        address: '0xf977814e90da44bfa03b6295a0616a897441acec',
        title: "BNB",
        dimage: bnb,
      },
      {
        damount: '$5.81K',
        address: 'DPDLBAe3RGQ2GiPxDzhgjcmpZCZD8cSBgZ',
        title: "Doge",
        dimage: dogecoin,
      },
      {
        damount: '$6.46K',
        address: 'BQeizWYD2dHmQq1b6HQqwBPrLWKitnhv5K82ZnRNPL8z',
        title: "SOL",
        dimage: solana,
      },
      {
        damount: '$7.48k',
        address: 'Ae2tdPwUPEYwFx4dmJheyNPPYXtvHbJLeCaA96o6Y2iiUL18cAt7AizN2zG',
        title: "ADA",
        dimage: cardano,
      },
    ],
  };
}

const rows1 = [[
  createData('Autocall fund', '$25.91M', Safeguard1),
  createData('Option BTC', '$175.32M', Safeguard1),
  createData('Option ETH', '$193.83M', Safeguard1),
  createData('NFT BlueChip', '$5.30M', Safeguard1),
  createData('Spot BlueChip', '$325.32M', Safeguard1),
  createData('Futures alt', '$525.73M', Safeguard1),
  createData('Futures BlueChip', '$424.62M', Safeguard1),
  createData('Derivatives', '$4.62M', Safeguard1),
  createData('Sharkfin', '$3.21M', Safeguard1),
  createData('Dualcurrency', '$24.23M', Safeguard1),
],
  exchangeData,
  fiatData
];



const Tabs = () => {

  const [data1, setData1] = useState(datatmp1);
  const [data, setData] = useState(datatmp);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [exchange, setExchange] = useState('');
  const [exbalance, setExbalance] = useState('');
  const [currentTab, setCurrentTab] = useState('0');

  const [partners, setPartners] = useState(rows1);
  const [part, setPart] = useState('')

  const changeValue = event => {
    setPart(event.target.value);
  }

  const handleAddVault = (event) => {
    let datatmp = [...partners[0], createData(part, '$0.00M', Safeguard1)];
    setPartners([datatmp, partners[1], partners[2]]);
  }

  const handleAddExchange = (event) => {
    let datatmp = [...partners[1], createData(part, '$0.00M', exchangeIcon)];
    setPartners([partners[0], datatmp, partners[2]]);
  }

  const handleAddFiat = (event) => {
    let datatmp = [...partners[2], createData(part, '$0.00M', fiatIcon)];
    setPartners([partners[0], partners[1], datatmp]);
  }



  const tabs = [
    {
      id: '0',
      tabTitle: 'My Vault',
      title: 'Vaults',
      amount: "$100M",
    },
    {
      id: '1',
      tabTitle: 'Exchanges',
      title: 'Exchange',
      amount: "$205K",
    },
    {
      id: '2',
      tabTitle: 'Fiat',
      title: 'Fiat',
      amount: "$50K",
    }
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
    console.log("currentTab is: ", currentTab)
  }


  useEffect(() => {
    const ajax = new Ajax();
    ajax.send();
    ajax.onSuccess = (data: any) => {
      setData([]);
    }


    const ajax1 = new Ajax();
    ajax.send();
    ajax1.onSuccess = (data1: any) => {
      setData1([]);
    }
  }, []);



  const dataupdate = () => {
    datatmp = [...datatmp, {
      name: name,
      amount: amount,
    }];

    setData(datatmp);
    console.log("the data is:", vaultData)
    console.log("the data is:", data)
  };


  const dataupdate1 = () => {
    datatmp1 = [...datatmp1, {
      name: exchange,
      amount: exbalance,
    }];

    setData1(datatmp1);
    console.log("the data1 is:", exchangeData)
    console.log("the data1 is:", data1)
  };


  const handleChange = event => {
    setName(event.target.value);
  }

  const handleChange1 = event => {
    setAmount(event.target.value);
  }


  const handleChange2 = event => {
    setExchange(event.target.value);
  }

  const handleChange3 = event => {
    setExbalance(event.target.value);
  }



  const [value, setValue] = React.useState('1');
  const handleChange5 = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className='' style={{ zIndex: 1, "width": "100%", "paddingLeft": "2%" }} >

      <div className='' style={{ "padding": "2px" }}>
        <div>


          <Button class="tabcard" justify-self='center' key={0} id={0} variant="outlined"
            startIcon={<Button variant="contained"  ><HealthAndSafetyIcon sx={{ width: 80, height: 60, }} /></Button>}
            onClick={(handleTabClick)}
            disableRipple
          >
            <a style={{ "fontSize": 25, "fontWeight": 100 }}>Vaults<br /></a>
            <a style={{ "fontSize": 30, "fontWeight": 800 }}>&emsp;&emsp;&emsp;{"$1.7B"}</a>
          </Button>

          <Button class="tabcard" justify-self='center' key={0} id={1} variant="outlined"
            startIcon={<Button variant="contained" ><CurrencyExchangeIcon sx={{ width: 80, height: 60, }} /></Button>}
            onClick={(handleTabClick)}
            disableRipple
          >
            <a style={{ "fontSize": 25, "fontWeight": 100 }}>Exchanges<br /></a>
            <a style={{ "fontSize": 30, "fontWeight": 800 }}>&emsp;&emsp;&emsp;{"$310M"}</a>
          </Button>

          <Button class="tabcard" justify-self='center' key={0} id={2} variant="outlined"
            startIcon={<Button variant="contained"  ><AttachMoneyIcon sx={{ width: 80, height: 60, }} /></Button>}
            onClick={(handleTabClick)}
            disableRipple
          >
            <a style={{ "fontSize": 25, "fontWeight": 100 }}>{"Fiat"}<br /></a>
            <a style={{ "fontSize": 30, "fontWeight": 800 }}>&emsp;&emsp;&emsp;{"$560K"}</a>
          </Button>

        </div>
      </div>






      {tabs.map((tab, i) =>
        <>
          {currentTab === `${tab.id}` &&
            <Header category="" title={tab.title} />}
          <div id={i} style={{ width: "98%", }}>

            <Grid container spacing={2}>
              <Grid container lg={8} spacing={2} >
                {currentTab === `${tab.id}` &&
                  <div className=" bg-white rounded-2xl" style={{ "width": "100%" }}>
                    <div>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 'none', borderColor: 'black', }}>
                          <TabList onChange={handleChange5} aria-label="lab API tabs example">
                          </TabList>
                        </Box>
                        <TabPanel value="1" padding="10px">
                          <div className='flex' style={{ "align-items": "center" }}><Appbar name={tab.title} sx={{ color: "warning", }}> </Appbar>
                            {currentTab === `0` && `${tab.id}` === `0` &&
                              <AddAccount name={tab.title} func={handleAddVault} func1={changeValue}></AddAccount>
                            }
                            {currentTab === `1` && `${tab.id}` === `1` &&
                              <AddAccount name={tab.title} func={handleAddExchange} func1={changeValue}></AddAccount>
                            }
                            {currentTab === `2` && `${tab.id}` === `2` &&
                              <AddAccount name={tab.title} func={handleAddFiat} func1={changeValue}></AddAccount>
                            }
                          </div>
                          <CollapsePage currentTab={currentTab} tabid={tab.id} datasource={partners[i]}></CollapsePage>

                        </TabPanel>
                      </TabContext>
                    </div>
                  </div>
                }
              </Grid>


              <Grid container lg={3.95} spacing={2} >
                {currentTab === `0` && `${tab.id}` === `0` &&
                  <>
                    <div className="m-4  mt-1 p-1 md:p-10 bg-white rounded-2xl"

                      style={{ "width": "100%" }}>
                      <div  >

                        <Grid container rowSpacing={1} style={{ width: "100%", height: "300px", "justify-self": 'center' }} >
                          <Grid item xs={6} >
                            <div className='activitycard'>
                              < CallReceivedIcon fontSize='large' />
                              <p>inflow </p>
                              <p>$21M </p>

                            </div>
                          </Grid>
                          <Grid item xs={6} >
                            <div className='activitycard'>
                              <ArrowOutwardIcon fontSize='large' />
                              <p>outflow</p>
                              <p>$15M</p>
                            </div>

                          </Grid>
                          <Grid item xs={6} >
                            <div className='activitycard'>
                              <AcUnitIcon fontSize='large' />
                              <p>Frozen</p>
                              <p>$150K</p>
                            </div>

                          </Grid>
                          <Grid item xs={6} >
                            <div className='activitycard'>
                              <SendIcon fontWeight="900" fontSize='large' />
                              <p>Allocated</p>
                              <p>$180K</p>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                    <div className="m-4  mt-1 p-1 md:p-10 bg-white rounded-2xl"
                      style={{ "width": "100%" }}>

                      <div  >
                        <Pie id="pie-chart" title="vaults"  data={ecomPieChartData[0]} legendVisiblity={true} />
                      </div>
                    </div>
                  </>
                }


                {currentTab === `1` && `${tab.id}` === `1` &&

                  <div className="m-4  mt-1 p-1 md:p-10 bg-white rounded-2xl"
                    style={{ "width": "100%" }}>
                    <div  >
                      <Pie id="pie-chart" title="exchanges"  data={ecomPieChartData[1]} legendVisiblity={true} />
                    </div>
                  </div>
                }

                {currentTab === `2` && `${tab.id}` === `2` &&

                  <div className="m-4  mt-1 p-1 md:p-10 bg-white rounded-2xl"
                    style={{ "width": "100%" }}>
                    <div  >
                      <Pie id="pie-chart" title="fiats" data={ecomPieChartData[2]} legendVisiblity={true} />
                    </div>
                  </div>
                }

              </Grid>
            </Grid>
          </div >
        </>
      )
      }


    </div >
  );
}

export default Tabs;