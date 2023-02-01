import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { vaultData, exchangeData, FiatData, vaultGrid, exchangeGrid, fiatGrid, iconData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Ajax } from '@syncfusion/ej2-base';

import Grid from '@mui/material/Unstable_Grid2';
import { Pie, Transfer } from '.';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { assetsData } from '../data/dummy';
import binance from '../data/binance.png'
import bitstamp from '../data/bitstamp.png'
import deribit from '../data/deribit.png'
import Safeguard1 from '../data/Safeguard.png'
import { ecomPieChartData } from '../data/dummy';


function createData(name, amount, carbs, protein) {
  return { name, amount, carbs, protein };
}

const rows1 = exchangeData
const rows = [
  createData('Autocall fund', '$25.91M', "6.0%"),
  createData('Option BTC', '$175.32M', "9.0%"),
  createData('Option ETH', '$193.83M', "16.0%"),
  createData('NFT BlueChip', '$5.30M', "3.7%"),
  createData('Spot BlueChip', '$325.32M', "16.0%"),
  createData('Futures alt', '$525.73M', "6.0%"),
  createData('Futures BlueChip', '$424.62M', "16.0%"),
  createData('Derivatives', '$4.62M', "16.0%"),
  createData('Sharkfin', '$3.21M', "16.0%"),
  createData('Dualcurrency', '$24.23M', "16.0%"),

];



const TabsAsset = () => {

  const [currentTab, setCurrentTab] = useState('0');

  const tabs = [
    {
      id: '0',
      tabTitle: 'My Vault',
      title: 'BTC',
      amount: "$1.2M",
      image: <CurrencyBitcoinIcon />,
    },
    {
      id: '1',
      tabTitle: 'Ethereum',
      title: 'Ethereum',
      amount: "$542M",
      image: <Button startIcon={< CurrencyBitcoinIcon fontSize="large"></CurrencyBitcoinIcon>} />,
    },
    {
      id: '2',
      tabTitle: 'USDT',
      title: 'USDT',
      amount: "$50M",
      image: <CurrencyBitcoinIcon />,
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
      <div className='scrolling-wrapper' style={{ "padding": "2px" }}>
        <div>
          {assetsData.map((tab, i) =>
            <Button class="assetcard" justify-self='center' key={tab.id} id={tab.id} variant="outlined"
              startIcon={<img src={tab.image} />}
              onClick={(handleTabClick)}
              disableRipple
            >
              <a>{tab.title}<br /></a>
              <a style={{ "fontSize": 18, "fontWeight": 800 }}>&emsp;&emsp;&emsp;{tab.amount}</a>
            </Button>
          )}

        </div>
      </div>

      {tabs.map((tab, i) =>
        <div id={i} style={{ width: "98%", }}>
          <Grid container spacing={2}>
            <Grid container lg={8} spacing={2} >
              {currentTab === `${tab.id}` &&
                <div className=" bg-white rounded-2xl"
                  style={{ "width": "100%" }}
                >
                  <div>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 'none', borderColor: 'black', }}>
                        <TabList onChange={handleChange5} aria-label="lab API tabs example">
                        </TabList>
                      </Box>
                      <TabPanel value="1" padding="10px">

                        <TableContainer component={Paper} style={{ width: '100%' }} >
                          <Table sx={{ "& td, &  th": { border: 0 } }} size="large" aria-label="">

                            <TableBody >
                              {rows1.map((row) => (
                                <TableRow key={row.name}>
                                  <TableCell sx={{ width: '50%' }} component="th" scope="row" >

                                    <div className="flex-container flex" style={{ "alignItems": "center", }}>
                                      <img src={row.image} width="40" />
                                      <a style={{ "fontSize": "20px", "fontWeight": "400" }} >&emsp;&emsp;{row.name}</a>
                                    </div>

                                  </TableCell>
                                  <TableCell align='left' sx={{ width: '30%' }} style={{ "fontSize": "20px", "fontWeight": "800" }}>{row.details[tab.id].damount}</TableCell>
                                  <TableCell align='left' sx={{ width: '20%' }}  ><div class="flex"><Transfer icon={<ArrowUpwardIcon />} />&emsp;<Transfer icon={<ArrowDownwardIcon />} /><MoreHorizIcon /></div></TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
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
                            <ArrowOutwardIcon />
                            <p>inflow </p>
                            <p>$21M </p>
                          </div>
                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            < CallReceivedIcon />
                            <p>outflow</p>
                            <p>$15M</p>
                          </div>

                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            <AcUnitIcon />
                            <p>Frozen</p>
                            <p>$150K</p>
                          </div>

                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            <SendIcon />
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
                      <Pie title="Available" id="pie-chart" data={ecomPieChartData[3]} legendVisiblity={true} />
                    </div>

                  </div>
                </>
              }


              {currentTab === `1` && `${tab.id}` === `1` &&
                <>
                  <div className="m-4  mt-1 p-1 md:p-10 bg-white rounded-2xl"
                    style={{ "width": "100%" }}>
                    <div  >

                      <Grid container rowSpacing={1} style={{ width: "100%", height: "300px", "justify-self": 'center' }} >
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            <ArrowOutwardIcon />
                            <p>inflow </p>
                            <p>$21M </p>
                          </div>
                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            < CallReceivedIcon />
                            <p>outflow</p>
                            <p>$15M</p>
                          </div>

                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            <AcUnitIcon />
                            <p>Frozen</p>
                            <p>$150K</p>
                          </div>

                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            <SendIcon />
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
                      <Pie id="pie-chart" data={ecomPieChartData[4]} legendVisiblity={true} />
                    </div>

                  </div>
                </>
              }

              {currentTab === `2` && `${tab.id}` === `2` &&
                <>
                  <div className="m-4  mt-1 p-1 md:p-10 bg-white rounded-2xl"
                    style={{ "width": "100%" }}>
                    <div  >

                      <Grid container rowSpacing={1} style={{ width: "100%", height: "300px", "justify-self": 'center' }} >
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            <ArrowOutwardIcon />
                            <p>inflow </p>
                            <p>$21M </p>
                          </div>
                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            < CallReceivedIcon />
                            <p>outflow</p>
                            <p>$15M</p>
                          </div>

                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            <AcUnitIcon />
                            <p>Frozen</p>
                            <p>$150K</p>
                          </div>

                        </Grid>
                        <Grid item xs={6} >
                          <div className='activitycard'>
                            <SendIcon />
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
                      <Pie id="pie-chart" data={ecomPieChartData[5]} legendVisiblity={true} />
                    </div>

                  </div>
                </>
              }
            </Grid>
          </Grid>
        </div>
      )
      }
    </div >
  );
}

export default TabsAsset;