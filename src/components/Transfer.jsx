import React, { useState, useEffect } from 'react';
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
import { assetsData, userData } from '../data/dummy';


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
import { Ajax } from '@syncfusion/ej2-base';
import { format } from 'date-fns'
import axios from "axios";
import CancelIcon from '@mui/icons-material/Cancel';




const Transfer = (props) => {

  const [data, setData] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('');
  const [asset, setAsset] = useState('');
  const [note, setNote] = useState('');
  const localData = JSON.parse(sessionStorage.token).data;
  const localToken = JSON.parse(sessionStorage.token).token;
  const [rows, setRows] = useState([]);

  const handleTx = () => {
    setRows([...rows, createData(3, destination.ID, amount, asset.id, "done", "#8BE78B", format(new Date(), 'yyyy-mm-dd'))])
    handleClose()
  }



  function createData(source, destination, amount, asset, status, statusBg, createdAt, type, destAddr, txHash, txId, networkFee, update, signed, aml, note, senderImage, receiverImage, assetImage) {
    return {
      source,
      destination,
      amount,
      asset,
      status,
      statusBg,
      createdAt,
      senderImage,
      receiverImage,
      assetImage,
      history: [
        {
          Type: type,
          DestAddr: destAddr,
          TxHash: txHash,
          TxID: txId,
          NetworkFee: networkFee,
          Amount: amount,
          Update: update,
          Signed: signed,
          AML: aml,
          Note: note
        },
      ],
    };
  }



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "right", alignItems: "left", marginTop: "0px", marginRight: "60px", "border-radius": "0px", }}>
        <button onClick={handleOpen}>{props.icon}</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >

          <Dialog style={{ "border-radius": "30px", }} open={open} >
            <div className='flex' style={{"alignItems": "center","border-radius": "30px"}}>
              <DialogTitle style={{"width": "90%"}}>New Transfer</DialogTitle>
              <div style={{"justify-content": "right"}}> <button onClick={handleClose}><CancelIcon /></button> </div>
            </div>
            <DialogContent >
              <DialogContentText>
              </DialogContentText>

              <a> Assets:</a>
              <Autocomplete
                sx={{ width: 300 }}
                options={assetsData}
                autoHighlight
                getOptionLabel={(option) => option.label}
                asset={asset}
                onChange={(event, newValue) => {
                  setAsset(newValue);
                }}

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
                  <TextField style={{ "width": "185%", borderRadius: "100px" }}
                    {...params}
                    type="text"
                    id="asset"
                    margin="dense"
                    label="Asset Name"
                    inputProps={{
                      ...params.inputProps,
                    }}
                    defaultValue={{
                      image: "bitcoin",
                      label: 'BTC',
                      id: 0,
                    }}
                  />
                )}
              />

              <a> From</a>
              <Autocomplete
                margin="dense"
                sx={{ width: 300 }}
                options={userData}
                autoHighlight
                getOptionLabel={(option) => option.label}
                asset={destination}
                onChange={(event, newValue) => {
                  setDestination(newValue);
                }}
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

                  <TextField style={{ "width": "185%" }}
                    {...params}
                    id="from"
                    type="text"
                    margin="dense"
                    label="Source Name"
                    inputProps={{
                      ...params.inputProps,
                      variant: "standard", // disable autocomplete and autofill
                    }}
                  />
                )}
              />


              <a> To:</a>
              <Autocomplete
                margin="dense"
                sx={{ width: 300 }}
                options={userData}
                autoHighlight
                getOptionLabel={(option) => option.label}
                asset={destination}
                onChange={(event, newValue) => {
                  setDestination(newValue);
                }}
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

                  <TextField style={{ "width": "185%" }}
                    {...params}
                    id="destination"
                    type="text"
                    margin="dense"
                    label="Recipient"
                    inputProps={{
                      ...params.inputProps,
                      variant: "standard", // disable autocomplete and autofill
                    }}
                  />
                )}
              />


              <div className='flex'>
                <div>
                  <a> Amount:</a>
                  <TextField style={{ "width": "140%" }}
                    autoFocus
                    margin="dense"
                    onChange={(event) => {
                      setAmount(event.target.value);
                    }}
                    id="amount"
                    type="number"
                    label="Net Amount"
                    fullWidth
                    variant="outlined"
                  ></TextField>
                </div>
                <div><a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a></div>
                <div style={{ "width": "30%", }}>
                  <a> Fee:</a>
                  <TextField
                    autoFocus
                    margin="dense"
                    onChange={(event) => {
                      setAmount(event.target.value);
                    }}
                    id="fee"
                    type="text"
                    label="Fee"
                    fullWidth
                    variant="outlined"
                  />
                </div>
              </div>
              <a> Optional Note</a>
              <TextField
                autoFocus
                margin="dense"
                onChange={(event) => {
                  setNote(event.target.value);
                }}
                id="note"
                type="text"
                label="Internal Note"
                fullWidth
                variant="outlined"
              />
            </DialogContent>
            <DialogActions style={{ "justifyContent": "center" }}>
              {/*              <Button onClick={handleClose}>Cancel</Button>  */}
              <div><Button style={{ "width": "500px", "height": "60px", "justifyContent": "center", borderRadius:"15px" }} variant='contained' onClick={handleTx}>Submit</Button></div>
            </DialogActions>
          </Dialog>
        </Modal>
      </div>




    </div>
  );
}

export default Transfer;
