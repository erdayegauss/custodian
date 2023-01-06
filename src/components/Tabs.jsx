import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { vaultData, exchangeData, FiatData, vaultGrid, exchangeGrid, fiatGrid, iconData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Ajax } from '@syncfusion/ej2-base';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import binance from '../data/binance.png'
import bitstamp from '../data/bitstamp.png'
import deribit from '../data/deribit.png'
import Safeguard1 from '../data/Safeguard.png'
import Grid from '@mui/material/Unstable_Grid2';

import { Pie, Transfer } from '../components';
import { ecomPieChartData } from '../data/dummy';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


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

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

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


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData('16% APR Fixed Earn', '10d', "6.0%"),
  createData('16% APR Fixed Earn', '10d', "9.0%"),
  createData('16% APR Fixed Earn', '10d', "16.0%"),
  createData('16% APR Fixed Earn', '10d', "3.7%"),
  createData('16% APR Fixed Earn', '90d', "16.0%"),
  createData('16% APR Fixed Earn', '10d', "6.0%"),
  createData('16% APR Fixed Earn', '10d', "9.0%"),
  createData('16% APR Fixed Earn', '10d', "16.0%"),
  createData('16% APR Fixed Earn', '10d', "3.7%"),
  createData('16% APR Fixed Earn', '90d', "16.0%"),

];



const Tabs = () => {

  const [data1, setData1] = useState(datatmp1);
  const [data, setData] = useState(datatmp);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [exchange, setExchange] = useState('');
  const [exbalance, setExbalance] = useState('');

  const [currentTab, setCurrentTab] = useState('1');

  const { currentColor } = useStateContext();

  const source = [datatmp, datatmp1, FiatData]
  const gridsource = [vaultGrid, exchangeGrid, fiatGrid]

  const toolbarOptions = ['Search'];

  const tabs = [
    {
      id: 0,
      tabTitle: 'My Vault',
      title: 'Vault',
      content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
      amount: "$100M",
    },
    {
      id: 1,
      tabTitle: 'Exchanges',
      title: 'Exchange',
      content: 'Contenido de tab 2.',
      amount: "$205K",
    },
    {
      id: 2,
      tabTitle: 'Fiat',
      title: 'Fiat',
      content: 'Contenido de tab 3.',
      amount: "$50K",
    }
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
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



      <div className='' style={{ "padding": "10px" }}>
        <div>
          {tabs.map((tab, i) =>

            <Button class="card " justify-self='center' key={i} id={tab.id} variant="outlined"
              startIcon={<img src={iconData[i].image} alt="" />}
              onClick={(handleTabClick)}
              style={{
                backgroundColor: "#1b98c4",
              }}
              disableRipple
            >
              <a>{tab.title}<br /></a>
              <a>&emsp;&emsp;&emsp;{tab.amount}</a>
            </Button>

          )}
        </div>
      </div>


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



      <div class="container" >
        {tabs.map((tab, i) =>
          <div key={i} style={{ width: "95%" }}>
            {currentTab === `0` && `${tab.id}` === `0` &&
              <div style={{ display: "flex", justifyContent: "right", alignItems: "right", margin: "10px" }} >
                <Button variant="contained" onClick={handleClickOpen}>
                  + Add Vault
                </Button>
                <Dialog open={open} onClose={handleClose} >
                  <DialogTitle sx={{ m: 0, p: 2 }} >Add Asset Wallet</DialogTitle>
                  <DialogContent dividers>
                    <DialogContentText>
                      Asset Name.
                    </DialogContentText>
                    <TextField id="name" label="Name" variant="outlined" type='text' onChange={handleChange} value={name} />
                    <TextField id="balance" label="USD Amount" variant="outlined" type="text" onChange={handleChange1} value={amount} />



                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={dataupdate}>Create</Button>
                  </DialogActions>
                </Dialog>
              </div>
            }


            {currentTab === `1` && `${tab.id}` === `1` &&
              <div style={{ display: "flex", justifyContent: "right", alignItems: "right", margin: "10px" }} >



                <Button variant="contained" onClick={handleClickOpen}>
                  + Exchange Account
                </Button>
                <Dialog open={open} onClose={handleClose} >
                  <DialogTitle sx={{ m: 0, p: 2 }} >Add Exchange</DialogTitle>
                  <DialogContent dividers>
                    <DialogContentText>
                      Exchange Name.
                    </DialogContentText>
                    <TextField id="exchange" label="exchange" variant="outlined" type='text' onChange={handleChange2} value={exchange} />
                    <TextField id="exbalance" label="USD Amount" variant="outlined" type="text" onChange={handleChange3} value={exbalance} />



                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={dataupdate1}>Create</Button>
                  </DialogActions>
                </Dialog>
              </div>
            }


            <Grid container spacing={2}>
              <Grid container lg={9} spacing={2} >

                <div style={{ "padding": "20px" }}>



                  {currentTab === `${tab.id}` &&

                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 'none', borderColor: 'black', }}>
                        <TabList onChange={handleChange5} aria-label="lab API tabs example">
                        </TabList>
                      </Box>
                      <TabPanel value="1" padding="10px">

                        <TableContainer component={Paper} style={{ width: '200%' }} >
                          <Table sx={{ "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Tenor</TableCell>
                                <TableCell align="left">APR</TableCell>
                                <TableCell align="left"></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody >
                              {rows.map((row) => (
                                <TableRow key={row.name}>
                                  <TableCell style={{ width: '55%' }} component="th" scope="row" >

                                    <div className="flex-container">
                                      <img style={{ "width": "10%", "padding": "10px" }} src="/img/btc.png" />
                                      <a>{row.name}</a>
                                      <img style={{ "width": "30%", "padding": "10px" }} src="/img/banner1.png" />
                                    </div>

                                  </TableCell>
                                  <TableCell align="left">{row.calories}</TableCell>
                                  <TableCell align="left">{row.fat}</TableCell>
                                  <TableCell style={{ width: '10%', "alignItems": "center" }} ><Transfer icon={<ArrowUpwardIcon />} /></TableCell>
                                  <TableCell style={{ width: '10%', "alignItems": "center" }} ><Transfer icon={<ArrowDownwardIcon />} /></TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </TabPanel>
                    </TabContext>}


                </div>
              </Grid>
              <Grid container lg={2.9} spacing={2} >

                {currentTab === `0` && `${tab.id}` === `0` &&
                  <>
                    <div class="flex" style={{ "width": "400px" }} >
                      <p>recent activity</p>
                    </div>

                    <div class="flex" style={{ "width": "400px" }} >
                      <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={true} height="150%" />
                    </div>

                  </>
                }



                {currentTab === `1` && `${tab.id}` === `1` &&
                  <>
                    <div  >



                      <Grid container  rowSpacing={1} style={{ width:"140%",height:"300px","justify-self":'center' }} >
                        <Grid item xs={6} >
                          <div style={{ padding:"10px", "height":"100px", alignItems:"center",  "text-align": "center", backgroundColor:"blueviolet" }}>
                            <ArrowOutwardIcon />
                            <p>inflow </p>
                            <p>$21M </p>

                          </div>
                        </Grid>
                        <Grid item xs={6} >
                          <div style={{ padding:"10px", "height":"100px","display": "flex",   "justifyContent": "center",   "text-align": "center", backgroundColor:"blueviolet" }}>                            <a>2</a>
                          </div>

                        </Grid>
                        <Grid item xs={6} >
                          <div style={{ padding:"10px", "height":"100px","display": "flex",   "justifyContent": "center",   "text-align": "center", backgroundColor:"blueviolet" }}>
                            <a>3</a>
                          </div>

                        </Grid>
                        <Grid item xs={6} >
                          <div style={{ padding:"10px", "height":"100px","display": "flex",   "justifyContent": "center",   "text-align": "center", backgroundColor:"blueviolet" }}>
                            <a>4</a>
                          </div>

                        </Grid>
                      </Grid>


                      <>
                        <div class="flex" style={{ "width": "400px" }} >
                          <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={true} height="150%" />
                        </div>
                      </>
                    </div>



                  </>
                }

                {currentTab === `2` && `${tab.id}` === `2` &&
                  <>
                    <div class="flex" style={{ "width": "400px" }} >
                      <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={true} height="150%" />
                    </div>
                  </>
                }
              </Grid>
            </Grid>

          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;