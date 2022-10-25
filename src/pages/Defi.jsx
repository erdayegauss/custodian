import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid,defiData } from '../data/dummy';
import { Header,Deficard } from '../components';

const Defi = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (

<div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
  <div class="defihead"></div>

<div class="defi">
<div class="defi1"><Deficard image={defiData[0].image} name="Uniswap"  ></Deficard> </div>
<div class="defi2"><Deficard image={defiData[1].image} name="AVAE"  ></Deficard>  </div>
<div class="defi3"><Deficard image={defiData[2].image} name="1 Inch"  ></Deficard>  </div>
<div class="defi4"><Deficard image={defiData[3].image} name="Synthetix"  ></Deficard>  </div>
<div class="defi5"><Deficard image={defiData[4].image} name="Maker Dao"  ></Deficard>  </div>
<div class="defi6"><Deficard image={defiData[5].image} name="Compond"  ></Deficard>  </div>
<div class="defi7"><Deficard image={defiData[6].image} name="Polygon"  ></Deficard>  </div>
<div class="defi8"><Deficard image={defiData[7].image} name="Yearn Fiannce"  ></Deficard>  </div>
<div class="defi9"><Deficard image={defiData[8].image} name="Curve"  ></Deficard>  </div>
<div class="defi10"><Deficard image={defiData[9].image} name="Optimism"  ></Deficard>  </div>
</div>
</div>
  );
};
export default Defi;
