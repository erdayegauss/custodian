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
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';




const AddressBar = (props) => {

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
              <DialogTitle style={{"width": "90%"}}> {props.name} Address</DialogTitle>
              <div style={{"justify-content": "right"}}> <button onClick={handleClose}><CancelIcon /></button> </div>
            </div>





<div style={{  "margin-left": "auto", "margin-right": "auto", padding:"10px",}}>
<Box
      sx={{
        width: 500,
        height: 120,
        backgroundColor: '#f3f5f7',
        borderRadius: "10px",
        '&:hover': {
          backgroundColor: '#f3f5f7',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
<div style={{padding: "10px"}}>
<p style={{ fontSize: 20, fontWeight: 800}}>PERMERNANT ADDRESS</p>
<div class="flex" style={{alignItems: "center"}}><p style={{ fontSize: 15, fontWeight: 600}}>Legacy:&emsp;&emsp;</p><p style={{ fontSize: 10, fontWeight: 400}}>1D2fdkT97Huqm56duUCNgnrbYoSXy8RCsV</p></div>
<div class="flex" style={{alignItems: "center"}}><p style={{ fontSize: 15, fontWeight: 600}}>Description:&emsp;&emsp;</p><p style={{ fontSize: 10, fontWeight: 400}}>METAHARVEST-BTC-1</p></div>
{props.name === "BTC" &&
<>
<div class="flex" style={{alignItems: "center"}}><p style={{ fontSize: 15, fontWeight: 600}}>Segwit:&emsp;&emsp;</p><p style={{ fontSize: 10, fontWeight: 400}}>bc1qtq9eyq58nkzxhphjypxy65jpu7c6vp4ytl28z</p></div>
</>
}

</div>

    </Box>
</div>


<div style={{  "margin-left": "auto", "margin-right": "auto", padding:"10px",}}>
<Box
      sx={{
        width: 500,
        height: 100,
        backgroundColor: '#dfe5eb',
        borderRadius: "10px",
        '&:hover': {
          backgroundColor: '#dfe5eb',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >

    <div class="flex" style={{alignItems: "center", "margin-left": "auto", "margin-right": "auto", }}><EmergencyShareIcon fontSize="large"/>
    <p  style={{ padding: "8px", fontSize: 15, fontWeight: 400}}>The permanant address is used for whitelisted address in exchanges. 
    Exchanges will send assets to the wallet's legacy permanant address when connected via the exchange API. <br />learn more <CastForEducationIcon/></p>

    </div>

    </Box>
 

</div>



            
            <DialogActions style={{ "justifyContent": "center" }}>
              {/*              <Button onClick={handleClose}>Cancel</Button>  */}
              <div></div>
            </DialogActions>
          </Dialog>
        </Modal>
      </div>




    </div>
  );
}

export default AddressBar;
