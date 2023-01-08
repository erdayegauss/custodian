import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { ordersData, contextMenuItems, ordersGrid, partnerData } from '../data/dummy';
import { Header, Netcard, ConEx, Popup, Transfer, Button } from '../components';




const Network = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  const [numChildren, setNumChildren] = useState(0);



const onAddChild = () => {
  setNumChildren(1 + 1)
console.log("the NumberChilden is:", numChildren)
}
const children = [];

for (var i = 0; i < numChildren; i += 1) {
  children.push(<Netcard image={partnerData[0].image} name={partnerData[0].label} intro="it's test" key={i} number={i} />);
};





  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Network" />
      <div class="nethead"><Popup title='+ Network Connection' firstTitle="Add Network Connection" dataSource={partnerData}></Popup></div>


      <div class="parent">

      <div > <Netcard  image={partnerData[4].image} name={partnerData[4].label} intro="Galaxy Digital is a crypto services company. The Company's business lines include trading, asset management, investment banking, mining and principal invest." ></Netcard></div>
      <div > <Netcard  image={partnerData[5].image} name={partnerData[5].label} intro="Silvergate Capital Corporation (NYSE: SI) is the leading provider of innovative financial infrastructure solutions and services for the digital asset industry." ></Netcard></div>
      <div > <Netcard  image={partnerData[0].image} name={partnerData[0].label} intro="Zilliqa is a public, permissionless blockchain that is designed to offer high throughput with the ability to complete thousands of transactions per second." ></Netcard></div>
      <div > <Netcard  image={partnerData[1].image} name={partnerData[1].label} intro="Cosmos bills itself as a project that solves some of the “hardest problems” facing the blockchain industry，by offering an ecosystem of connected blockchains" ></Netcard></div>
      <div > <Netcard  image={partnerData[2].image} name={partnerData[2].label} intro="More than just a liquidity provider, B2C2 is a digital asset pioneer building the ecosystem of the future.making the firm the partner diverse institutions." ></Netcard></div>
{/*      <div > <Netcard  image={partnerData[3].image} name={partnerData[3].label} intro="Hodlnaut is a Singapore-based platform that provides innovative financial services for individual investors who can earn interest on their cryptocurrencies." ></Netcard></div> */}



{/*
        <div class="div1"> <Netcard dataSource={partnerData} image={partnerData[0].image} name={partnerData[0].label} connect="MetaHarvest valut-Options" ></Netcard></div>
        <div class="div2"> <Netcard image={partnerData[1].image} name={partnerData[1].label} connect="MetaHarvest valut-Spot"></Netcard></div>
        <div class="div3"><Netcard image={partnerData[2].image} name={partnerData[2].label} connect="MetaHarvest valut-Futures"></Netcard> </div>
        <div class="div4"><Netcard image={partnerData[3].image} name={partnerData[3].label} connect="MetaHarvest valut-Futures"></Netcard> </div>
        <div class="div5"> <Netcard image={partnerData[4].image} name={partnerData[4].label} connect="MetaHarvest valut-Spot"></Netcard></div>
        <div class="div6"> <Netcard image={partnerData[5].image} name={partnerData[5].label} connect="MetaHarvest valut-Future"></Netcard></div>

        <div >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className='flex' style={{"alignItems": "center"}}>
                <img src={partnerData[1].image} width="40px" style={{ "paddingLeft":"10px","justify-self": "center", }} />
                <p style={{fontSize:"20px",fontWeight:800}}>&emsp;&emsp;&emsp;&emsp;connect</p>
                <Transfer className="flex justify-center" icon={<ArrowDownwardIcon fontSize='large' />}>good</Transfer>
              </div>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>


              </CardContent>

            </CardActionArea>

          </Card>
        </div>
*/}

<div>

<Button onClick={onAddChild}>
{children}<p>test</p>
</Button>
</div>


        </div>

    </div>
  );
};
export default Network;
