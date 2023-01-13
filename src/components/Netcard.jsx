import React from 'react';
import Popinfo from './Popinfo.jsx'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {  Transfer } from '../components';

const Netcard = (props) => (





<div style={{"padding":"5px"}}>
<Card sx={{ maxWidth: 345 }}>
  <CardActionArea>
    <div className='flex' style={{"alignItems": "center"}}>
      <img src={props.image} width="40px" style={{ "paddingLeft":"10px","justify-self": "center", }} />
      <p style={{fontSize:"20px",fontWeight:800}}>&emsp;&emsp;&emsp;&emsp;Transfer</p>
      <Transfer className="flex justify-center" icon={<ArrowCircleRightIcon  />}></Transfer>
    </div>

    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.intro}
      </Typography>


    </CardContent>

  </CardActionArea>

</Card>
</div>


);


export default Netcard