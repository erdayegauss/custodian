import React from 'react';
import { Tabs, Header } from '../components';

const Accounts = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const state = {
    seen: false
  };





  return (
    <div className=" account ">

<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Accounts" />
      <h2> total amount in Dollar: $ 100,000.23 </h2>
      <Tabs />
    </div >
    </div>
  );
};
export default Accounts;
