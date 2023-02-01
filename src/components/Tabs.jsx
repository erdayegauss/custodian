import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { fiatData, exchangeData, } from '../data/dummy';
import { Pie } from '.';

import Grid from '@mui/material/Unstable_Grid2';

import { CollapsePage, Appbar, AddAccount } from '../components';
import { ecomPieChartData } from '../data/dummy';

import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Header } from '../components';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import SendIcon from '@mui/icons-material/Send';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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
import litecoin from '../data/litecoin.png'
import Safeguard1 from '../data/Safeguard.png'


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
                        <Pie id="pie-chart" title="vaults" data={ecomPieChartData[0]} legendVisiblity={true} />
                      </div>
                    </div>
                  </>
                }


                {currentTab === `1` && `${tab.id}` === `1` &&

                  <div className="m-4  mt-1 p-1 md:p-10 bg-white rounded-2xl"
                    style={{ "width": "100%" }}>
                    <div  >
                      <Pie id="pie-chart" title="exchanges" data={ecomPieChartData[1]} legendVisiblity={true} />
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