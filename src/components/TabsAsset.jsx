import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { vaultData, exchangeData, FiatData, vaultGrid, exchangeGrid, fiatGrid, iconData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Ajax } from '@syncfusion/ej2-base';


import binance from '../data/binance.png'
import bitstamp from '../data/bitstamp.png'
import deribit from '../data/deribit.png'
import Safeguard1 from '../data/Safeguard.png'
import Grid from '@mui/material/Unstable_Grid2';

import { Pie, Transfer } from '.';
import { ecomPieChartData } from '../data/dummy';



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import { Header } from '.';




import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import SendIcon from '@mui/icons-material/Send';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { assetsData } from '../data/dummy';


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

  const [data1, setData1] = useState(datatmp1);
  const [data, setData] = useState(datatmp);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [exchange, setExchange] = useState('');
  const [exbalance, setExbalance] = useState('');

  const [currentTab, setCurrentTab] = useState('0');

  const { currentColor } = useStateContext();

  const source = [datatmp, datatmp1, FiatData]
  const gridsource = [vaultGrid, exchangeGrid, fiatGrid]

  const toolbarOptions = ['Search'];

  const tabs = [
    {
      id: '0',
      tabTitle: 'My Vault',
      title: 'BTC',
      content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
      amount: "$100M",
      image: <CurrencyBitcoinIcon />,
    },
    {
      id: '1',
      tabTitle: 'Ethereum',
      title: 'Ethereum',
      content: 'Contenido de tab 2.',
      amount: "$205K",
      image: <Button startIcon={< CurrencyBitcoinIcon fontSize="large"></CurrencyBitcoinIcon>} />,
    },
    {
      id: '2',
      tabTitle: 'USDT',
      title: 'USDT',
      content: 'Contenido de tab 3.',
      amount: "$50K",
      image: <CurrencyBitcoinIcon />,
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


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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

      {/*
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/network">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/assets/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
*/}






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

                                    <div className="flex-container flex" style={{"alignItems": "center",}}>
                                      <img src={row.image} width="40" />
                                      <a style={{ "fontSize": "20px", "fontWeight": "400" }} >&emsp;&emsp;{row.name}</a>
                                    </div>

                                  </TableCell>
                                  <TableCell align='left' sx={{ width: '30%' }} style={{ "fontSize": "20px", "fontWeight": "800" }}>{row.amount}</TableCell>
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

            <Grid container lg={4} spacing={2} >




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
                      <Pie title="Available" id="pie-chart" data={ecomPieChartData[0]} legendVisiblity={true} />
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
                      <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={true} />
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
                      <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={true} />
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