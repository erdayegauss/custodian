import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: 'white' }}
      height={height}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Available"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="80%"
          startAngle={0}
          endAngle={360}
          radius="80%"
 //         explode
//          explodeOffset="10%"
 //         explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Outside',
            font: {
              fontWeight: '600',
              color: '#000000',
            },
          }}
          legendShape="Pentagon"
          legendSettings={{ position: 'Right', visible: true, height: '40', width: '160',shapeHeight: 15, shapeWidth: 15 }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;
