import React from 'react';
import { Tabs, Modal, ConEx, Addwallet } from '../components';

const Accounts = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const state = {
    seen: false
  };





  return (
    <div className=" account md:m-2  md:p-3 ">

      <ConEx />



      <Tabs />
    </div >
  );
};
export default Accounts;
