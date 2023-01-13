import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Transfer, AddressBar } from '../components';
import bitcoin from '../data/bitcoin.png'
import ethereum from '../data/ethereum.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



function createData(name, ammount, image) {
  return {
    image,
    name,
    ammount,


    details: [
      {
        damount: '$12.32M',
        address: '0x123476jsdhjkfasdf',
        title: "BTC",
        dimage: bitcoin,
      },
      {
        damount: '$12.32M',
        address: '0x123476jsdhjkfasdf',
        title: "ETH",
        dimage: ethereum,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);




  return (
    <React.Fragment>



      <TableRow key={row.name}>

        <TableCell align='left' sx={{ width: '30%' }} component="th" scope="row" >
          <div className="flex-container flex">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <img src={row.image} width="40" />
            <a style={{ "fontSize": "20px", "fontWeight": "400" }} >&emsp;&emsp;{row.name}</a>
          </div>

        </TableCell>
        <TableCell align='left' sx={{ width: '20%' }} style={{ "fontSize": "20px", "fontWeight": "800" }}>{row.amount}</TableCell>
        <TableCell align='right' sx={{ width: '10%' }}  ><div class="flex">
          <Transfer icon={<ArrowUpwardIcon />} />&emsp;
        </div>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}> </TableCell>
      </TableRow>




      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>

              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.title}>
                      <TableCell component="th" scope="row" align='left' sx={{ width: '50%' }} style={{ "fontSize": "20px", "fontWeight": "800" }}>
                        <div class="flex" style={{ "alignItems": 'center', }}>
                          <img src={detailsRow.dimage} width="35" />
                          <p style={{ fontSize: "16px", fontWeight: "500" }}> &emsp;{detailsRow.title}  </p>
                        </div>
                      </TableCell>
                      <TableCell align='left' sx={{ width: '20%' }} >{detailsRow.damount}</TableCell>
                      <TableCell align='left' sx={{ width: '20%' }} >
                        <IconButton aria-label="expand row" size="small" >
                          <AddressBar name={detailsRow.title} icon={<MoreHorizIcon />} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}





Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        damount: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        dimage: PropTypes.any.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('Autocall fund', '$25.91M', <HealthAndSafetyIcon />),
  createData('Option BTC', '$175.32M', <HealthAndSafetyIcon />),
  createData('Option ETH', '$193.83M', <HealthAndSafetyIcon />),
  createData('NFT BlueChip', '$5.30M', <HealthAndSafetyIcon />),
  createData('Spot BlueChip', '$325.32M', <HealthAndSafetyIcon />),
  createData('Futures alt', '$525.73M', <HealthAndSafetyIcon />),
  createData('Futures BlueChip', '$424.62M', <HealthAndSafetyIcon />),
  createData('Derivatives', '$4.62M', <HealthAndSafetyIcon />),
  createData('Sharkfin', '$3.21M', <HealthAndSafetyIcon />),
  createData('Dualcurrency', '$24.23M', <HealthAndSafetyIcon />),

];



const CollapsePage = (props) => {


  let rows1 = props.datasource;
  return (


    <>

      <TableContainer component={Paper} style={{ width: '100%' }} >
        <Table sx={{ "& td, &  th": { border: 0 } }} size="large" aria-label="">
          <TableBody >
            {rows1.map((row) => (
              <Row tabid={props.tabid} currentTab={props.currentTab} key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>







    </>


  );
}

export default CollapsePage;