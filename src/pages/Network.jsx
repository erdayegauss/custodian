import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import tether from '../data/tether.png'
import  galaxy from '../data/galaxy.png'
import binance from '../data/binance.png'
import bitstamp from '../data/bitstamp.png'
import { AddAccount } from '../components';
import fidelity from '../data/fidelity.jpeg'
import Silvergate  from '../data/silver.png'

import { ordersData, contextMenuItems, ordersGrid, partnerData } from '../data/dummy';
import { Header, Netcard, ConEx, Popup, Transfer } from '../components';




const Network = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  const [numChildren, setNumChildren] = useState(0);



  const [partners, setPartners] = useState([
    { image: galaxy, name: "Galaxy", 
    intro: "Galaxy Digital Holdings Ltd. is a financial services and investment management company.Offering services in  digital asset, blockchain tech sector."},
    { image: fidelity, name: "Fidelity  " , 
    intro: "Fidelity Digital Assets is dedicated to building products and services that help institutions adopt digital assets and innovate within digital world."},
    { image: Silvergate, name: "Silvergate" , 
    intro: "Silvergate Bank is the leading bank for innovative businesses in fintech and cryptocurrency. Based in San Diego, Silvergate has served innovators."},
  ]);


  const [part, setPart] = useState('')

  const addCard = event => {
    setPart(event.target.value);
    console.log("part value is:", part)
  }

  const handleChange = (event) => {
    let datatmp = [...partners, {
      name: part,
      image: tether,
      intro: part+" Companhy is dedicated to building products and services that help institutions adopt digital assets and innovate within digital world."
    }];
    setPartners(datatmp);
    console.log(partners)
  }



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
      <AddAccount func={handleChange} func1={addCard} name="Network" />

      <div class="parent">
        {partners.map((partner, i) =>
          <div > <Netcard image={partner.image} name={partner.name} intro={partner.intro} ></Netcard></div>
        )}

        {/*
      <div > <Netcard  image={partnerData[4].image} name={partnerData[4].label} intro="Galaxy Digital is a crypto services company. The Company's business lines include trading, asset management, investment banking, mining and principal invest." ></Netcard></div>
      <div > <Netcard  image={partnerData[5].image} name={partnerData[5].label} intro="Silvergate Capital Corporation (NYSE: SI) is the leading provider of innovative financial infrastructure solutions and services for the digital asset industry." ></Netcard></div>
      <div > <Netcard  image={partnerData[0].image} name={partnerData[0].label} intro="Zilliqa is a public, permissionless blockchain that is designed to offer high throughput with the ability to complete thousands of transactions per second." ></Netcard></div>
      <div > <Netcard  image={partnerData[1].image} name={partnerData[1].label} intro="Cosmos bills itself as a project that solves some of the “hardest problems” facing the blockchain industry，by offering an ecosystem of connected blockchains" ></Netcard></div>
      <div > <Netcard  image={partnerData[2].image} name={partnerData[2].label} intro="More than just a liquidity provider, B2C2 is a digital asset pioneer building the ecosystem of the future.making the firm the partner diverse institutions." ></Netcard></div>
*/}

        {/*      <div > <Netcard  image={partnerData[3].image} name={partnerData[3].label} intro="Hodlnaut is a Singapore-based platform that provides innovative financial services for individual investors who can earn interest on their cryptocurrencies." ></Netcard></div> */}

      </div>

    </div>
  );
};
export default Network;
