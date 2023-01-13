import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { SignIn,  ThemeSettings } from './components';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

import {

    Login,
    Navbar,
    Footer,
    Sidebar,
} from './components';
import {
    Exchange,
    Tx,
    Network,
    Defi,
    Whitelist,
    Clearance,
    Settlement,
    Assets,
    Accounts,
    Pie,
} from './pages';
import './App.css';




function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token

}


const App = () => {
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings
    } = useStateContext();


    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }

        console.log('token is: ', getToken());
    }, []);


   
      




    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '0' }}>
                        <TooltipComponent
                            content="Settings"
                            position="Top"
                        >
                            <button
                                type="button"
                                onClick={() => setThemeSettings(true)}
                                style={{ background: currentColor, borderRadius: '50%' }}
                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            >
                                <FiSettings />
                            </button>

                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-16 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            {/*
            <div className="w-0 dark:bg-secondary-dark-bg">
            */}
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={
                            activeMenu
                                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                                : 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-12 w-full  '
                        }
                    >
                        {/*                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 ' */}
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && (<ThemeSettings />)}

                            <Routes>
                                {/* fund  */}
                                <Route path="/" element={(<SignIn />)} />
                                <Route path="/accounts" element={(<Accounts />)} />

                                <Route path="/assets" element={(<Assets />)} />

                                {/* app  */}
                                <Route path="/clearance" element={<Clearance />} />
                                <Route path="/settlement" element={<Settlement />} />
                                <Route path="/network" element={<Network />} />
                                <Route path="/whitelist" element={<Whitelist />} />
                                <Route path="/defi" element={<Defi />} />
                                <Route path="/Transactions" element={<Tx />} />
                                <Route path="/Exchange" element={<Exchange />} />
                                <Route path="/login" element={<SignIn />} />


                                {/* charts  */}

                                <Route path="/pie" element={<Pie />} />

                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
