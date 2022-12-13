import React, {useState, useEffect} from 'react';
import {Header, AccountTab} from '../components';

const Accounts = () => {
    const [totalAmount, setTotalAmount] = useState(0);

    const setTotal = (amount) => {
        setTotalAmount(amount);
    }


    return (
        <div className=" account ">

            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <Header category="" title="Vaults"/>

                <p className="text-lg text-gray-400">Total Amount($): </p>
                <p className="text-3xl font-extrabold tracking-tight text-slate-900">$ {totalAmount}</p>

                {/*      <Tabs /> */}
                <AccountTab setTotal={setTotal}></AccountTab>

                <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
                <div class="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary=""
                     data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true"
                     data-statsticker="true" data-stats="USD"></div>

            </div>
        </div>
    );
};
export default Accounts;
