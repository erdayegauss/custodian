import  React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import { assetsData,userData } from '../data/dummy';

import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Moment from 'moment';

import { Ajax } from '@syncfusion/ej2-base';
import { format } from 'date-fns'


let rows = [
  createData('Frozen yoghurt', "Tom Billy", 6.0, "BTC", "Pending", "2022-09-12"),
  createData('Ice cream sandwich', "Jim Billy", 3.2, "ETH", "done", "2022-09-12"),
  createData('Eclair', "John Riddle", 7.0, "XRP", "done", "2022-10-12"),
  createData('Cupcake', "Tim Cook", 6.2, "USDC", "done", "2022-10-19"),
  createData('Gingerbread', "Tom Billy", 12.2, "USDT", "done", "2022-8-12"),
];


  
function createData(source, destination, amount, asset, status, createdAt) {
  return {
    source,
    destination,
    amount,
    asset,
    status,
    createdAt,
    history: [
      { Type: "Transfer",
        DestAddr: "0x123123r345456576767897897897978979789",
        TxHash: "0x4231443456767582342342342312234342342ac",
        TxID: "1231234345676",
        NetworkFee: "0.001",
        Amount: 32.1,
        Update: "2020-01-05",
        Signed: "Tom",
        AML: 'N/A',
        Note: "pls check",
      },      
    ],
  };
}


const TXS = () => {



  useEffect(() => {

    const ajax = new Ajax();
            ajax.send();
    ajax.onSuccess = (data: any) => {
      setData([]);
    }


}, []);

  const [data, setData] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] =  useState('');
  const [amount, setAmount] =  useState('');
  const [asset, setAsset] =  useState('');
  const [note, setNote] =  useState('');
  
  const handleChange  = event =>{
    setAsset(event.target.value);
    console.log(event.target.value)

   }  
  
  const handleChange1  = event =>{
    setSource(event.target.value);
    console.log(event.target.value)

   }
  
   const handleChange2  = event =>{
    setDestination(event.target.value);
    console.log(event.target.value)

   }


   const handleChange3  = event =>{
    setAmount(event.target.value);
    console.log(event.target.value)

   }
  

  
   const handleChange4  = event =>{
    setNote(event.target.value);
    console.log(event.target.value)
   }
  
  
  

  
  const handleTx = () => {
  
  rows = [...rows, createData(source, destination, amount, asset, "done", format(new Date(), 'yyyy-mm-dd'))]
  setData(rows)

  }

  
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.source}
          </TableCell>
          <TableCell>{row.destination}</TableCell>
          <TableCell>{row.amount}</TableCell>
          <TableCell align="right">{row.asset}</TableCell>
          <TableCell align="right">{row.status}</TableCell>
          <TableCell align="right">{row.createdAt}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>DestAddr</TableCell>
                      <TableCell>TxHash</TableCell>
                      <TableCell>TxID</TableCell>
                      <TableCell align="right">NetworkFee</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Update</TableCell>
                      <TableCell align="right">Signed</TableCell>
                      <TableCell align="right">AML</TableCell>
                      <TableCell align="right">Note</TableCell>                    
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.Type}>
                        <TableCell component="th" scope="row">
                          {historyRow.Type}
                        </TableCell>
                        <TableCell>{historyRow.DestAddr}</TableCell>
                        <TableCell align="right">{historyRow.TxHash}</TableCell>
                        <TableCell align="right">
                        {historyRow.TxID}
                        </TableCell>
                        <TableCell align="right">{historyRow.NetworkFee}</TableCell>
                        <TableCell align="right">{historyRow.Amount}</TableCell>
                        <TableCell align="right">{historyRow.Update}</TableCell>
                        <TableCell align="right">{historyRow.Signed}</TableCell>
                        <TableCell align="right">{historyRow.AML}</TableCell>
                        <TableCell align="right">{historyRow.Note}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }
  
  
  Row.propTypes = {
    row: PropTypes.shape({
      source: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      destination: PropTypes.string.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          Amount: PropTypes.number.isRequired,
          Type: PropTypes.string.isRequired,
          DestAddr: PropTypes.string.isRequired,
          TxID: PropTypes.string.isRequired,
          TxHash: PropTypes.string.isRequired,
          NetworkFee: PropTypes.string.isRequired,
          Update: PropTypes.string.isRequired,
          Signed: PropTypes.string.isRequired,
          AML: PropTypes.string.isRequired,
          Note: PropTypes.string.isRequired,
        }),
      ).isRequired,
      asset: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  
  
  
    const editing = { allowDeleting: true, allowEditing: true };
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  






  const countries = [
    { id: 0, label: 'BTC', phone: '376' },
    {
      id: 1,
      label: 'ETH',
      phone: '971',
    },
    { id: 2, label: 'USDT', phone: '93' },
    {
      id: 3,
      label: 'USDC',
      phone: '1-268',
    },
  ];




  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div>

    <div style={{ display: "flex", justifyContent: "right", alignItems:"right", margin: "10px" }}>
      <Button variant="outlined" onClick={handleOpen}>Transfer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >

        <Dialog open={open} >
          <DialogTitle>Transfer</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
            </DialogContentText>


            <Autocomplete
              sx={{ width: 300 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              onChange={(option) => {setAsset(option.label); console.log("the asset is:", {asset}) }}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={assetsData[option.id].image}
                    alt=""
                  />
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  type="text"
                  id="asset"
                  margin="dense"
                  label="Asset Name"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
            <Autocomplete
              sx={{ width: 300 }}
              options={userData}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="eager"
                    width="20"
                    src={userData[option.ID].image}
                    alt=""
                  />
                  {option.name}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="source"
                  type="text"
                  margin="dense"
                  label="Source Account"
                  onChange={handleChange1}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: '', // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <Autocomplete
              margin="dense"
              sx={{ width: 300 }}
              options={userData}
              autoHighlight
              onChange={handleChange2}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 4, flexShrink: 0 } }} {...props}>
                  <img
                    loading="eager"
                    width="20"
                    src={userData[option.ID].image}
                    alt=""
                  />
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (

                <TextField
                  {...params}
                  id="destination"
                  type="text"
                  margin="dense"
                  label="Destination Account/Address"
                  inputProps={{
                    ...params.inputProps,
                    variant: "standard", // disable autocomplete and autofill
                  }}
                />
              )}
            />
           { /*
              <TextField
                autoFocus
                margin="dense"
                onChange={handleChange}
                id="asset"
                type="text"
                label="Asset"
                type="text"
                fullWidth
                variant="outlined"
              />

              <TextField
                autoFocus
                margin="dense"
                onChange={handleChange1}
                id="source"
                type="text"
                label="From"
                type="text"
                fullWidth
                variant="outlined"
              />

              <TextField
                autoFocus
                margin="dense"
                onChange={handleChange2}
                id="destination"
                type="text"
                label="To"
                type="text"
                fullWidth
                variant="outlined"
              />
*/}

              <TextField
                autoFocus
                margin="dense"
                onChange={handleChange3}
                id="amount"
                type="text"
                label="Net Amount"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                onChange={handleChange4}
                id="note"
                type="text"
                label="Internal Note"
                type="text"
                fullWidth
                variant="outlined"
              />


          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleTx}>Submit</Button>
          </DialogActions>
        </Dialog>

      </Modal>
    </div>


    <TableContainer style={{width: "90%", margin:"5%"}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Source</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Amount&nbsp;($)</TableCell>
            <TableCell align="right">Asset</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>


 </div>

  );
}

export default TXS;
