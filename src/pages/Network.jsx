import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid, assetsData } from '../data/dummy';
import { Header, Netcard, ConEx } from '../components';

const Network = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
<div style={{height: "1000px"}} >
    <div class="nethead"><ConEx></ConEx></div>

<div class="parent">

<div class="div1"> <Netcard image={assetsData[0].image} name="Option Trading"  connect="Option trading in Asian Area" ></Netcard></div>
<div class="div2"> <Netcard image={assetsData[1].image} name="Spot Trading"  connect="Europe Spot trading"></Netcard></div>
<div class="div3"><Netcard image={assetsData[2].image} name="Derivative"  connect="Derivative in NA"></Netcard> </div>
<div class="div4"><Netcard image={assetsData[3].image} name="Clients"  connect="Clients"></Netcard> </div>
<div class="div5"> <Netcard image={assetsData[4].image} name="Proprietary"  connect="BTC trading network"></Netcard></div>
<div class="div6"> <Netcard image={assetsData[5].image} name="ETH Trading"  connect="ETH trading"></Netcard></div>
</div>

</div>
  );
};
export default Network;
