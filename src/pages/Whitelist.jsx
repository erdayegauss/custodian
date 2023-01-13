import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { contextMenuItems, WhitelistGrid, userData, assetsData } from '../data/dummy';
import { Header, Addlist, AddAccount } from '../components';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Paper from '@mui/material/Paper';
import avatar9 from '../data/avatar9.png'



const Whitelist = () => {
  const editing = { allowDeleting: true, allowEditing: true };



 // {ID: '13', label: "Hoe", name: 'Hoe Rhodes', image: avatar13, status: "invalid", statusBg: "red"},


  function createData(id, title) {

    const ID=id;
    const label=title;
    const name=title;
    const image=avatar9;
    const status="valid";
    const statusBg="green";
    let tmp={ID: ID, label: label, name: name, image: image, status:status, statusBg:statusBg}


    return tmp
  }



  const [partners, setPartners] = useState(userData);
  const [part, setPart] = useState('')

  const changeValue = event => {
    setPart(event.target.value);
  }

  const handleAddVault = (event) => {
    const id = partners.length.toString();

    let datatmp = [...partners, createData(id,part)];

    setPartners(datatmp);
    console.log("The current partners is:", partners)
  }


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">


<Header category="" title="Whitelists" />

<Button style={{ positon: "relative", left: "86%", }} ><AddAccount name="name" func={handleAddVault} func1={changeValue}></AddAccount></Button>


      <TableContainer component={Paper} style={{ width: '100%' }} >
        <Table sx={{ "& td, &  th": { border: 0 } }} size="large" aria-label="">

          <TableBody >
            {partners.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={{ width: '25%' }} component="th" scope="row" >

                  <div className="flex-container flex" style={{ "alignItems": "center", }}>
                    <img src={row.image} width="40" />
                    <a style={{ "fontSize": "20px", "fontWeight": "400" }} >&emsp;&emsp;{row.name}</a>
                  </div>

                </TableCell>
                <TableCell align='left' sx={{ width: '30%' }} style={{ "fontSize": "20px", "fontWeight": "800" }}>{row.status}</TableCell>
                <TableCell align='left' sx={{ width: '20%' }}  ><div class="flex"> &emsp; more </div></TableCell>
                <TableCell align='left' sx={{ width: '25%' }}  ><div class="flex"> &emsp; more </div></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>








       
    </div>
  );
};
export default Whitelist;