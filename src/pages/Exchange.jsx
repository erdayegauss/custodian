import { React, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import Button from '@mui/material/Button';

import { ordersData, contextMenuItems, ordersGrid, exchangeData, assetsData } from '../data/dummy';
import { Header, Deficard, InfoDefi, Popinfo } from '../components';
import connect from "../data/connect.jpeg";

const Exchange = () => {
  const editing = { allowDeleting: true, allowEditing: true };


  const [link, setLink] = useState('');



  return (

    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div class="defihead">

        <iframe src={link} height="600" width="1000" title="Iframe Example"></iframe>

      </div>
      <div class="exchange">
        <div class=""><button onClick={() => { setLink("https://bitcoinwisdom.io/markets/binance/btcusdt") }}>
          <Deficard image={exchangeData[1].image} name="Uniswap"  ></Deficard></button>
          <div class="ex1">
            <Button variant="outlined" ><InfoDefi dataSource={assetsData} display={exchangeData[1].image} image={connect}></InfoDefi></Button>
          </div>
        </div>


        <div class=""><button onClick={() => { setLink("https://www.gemini.com/prices/bitcoin") }}>
          <Deficard image={exchangeData[3].image} name="AVAE"  ></Deficard></button> 
          <div class="ex1">
            <Button variant="outlined"><InfoDefi dataSource={assetsData} display={exchangeData[3].image} image={connect}></InfoDefi></Button>
          </div>          
          </div>



        <div class=""><button onClick={() => { setLink("https://www.kucoin.com/trade/BTC-USDT") }}>
          <Deficard image={exchangeData[4].image} name="1 Inch"  ></Deficard></button>   
          <div class="ex1">
            <Button variant="outlined"><InfoDefi dataSource={assetsData} display={exchangeData[4].image} image={connect}></InfoDefi></Button>
          </div>         
          </div>
      </div>
    </div>
  );
};
export default Exchange;
