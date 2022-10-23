import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { employeesData3, employeesData1, employeesData2, employeesGrid, iconData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import {  Addwallet, Modal } from '../components';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');

    const { currentColor } = useStateContext();


    const source = [employeesData1, employeesData2, employeesData3, employeesData1, employeesData2]

    const toolbarOptions = ['Search'];

    const tabs = [
        {
            id: 0,
            tabTitle: 'My Vault',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 1,
            tabTitle: 'Exchanges',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 2,
            tabTitle: 'Fiat',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container' style={{ zIndex: 1 }} >
            <div className='tablet '>
                {tabs.map((tab, i) =>
                    <Button class="card " justify-self='center' key={i} id={tab.id} variant="outlined" 
                    startIcon={<img src={iconData[i].image} alt="" />} 
                    onClick={(handleTabClick)} 
                    style={{
                        backgroundColor:  currentColor ,
                    }}
                    >
                    </Button>
                )}
            </div>


            <div class="container" >
                
      <Modal />
            <Addwallet />
                {tabs.map((tab, i) =>
                    <div key={i}>

                        {currentTab === `${tab.id}` &&
                            <GridComponent style={{ padding: "1%", width: "97%" }} dataSource={source[`${tab.id}`]} pageSettings={{ pageCount: 5 }} toolbar={toolbarOptions}>
                                <ColumnsDirective >
                                    {employeesGrid.map((item, index) => <ColumnDirective class='' key={index} {...item} />)}
                                </ColumnsDirective>
                            </GridComponent>}



                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;