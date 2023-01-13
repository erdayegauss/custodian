import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = (props) => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category={props.title} title="" />
    <div className="w-full">
      <PieChart id="chart-pie" data={props.data} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;
