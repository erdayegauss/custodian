import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {
    Validation,
    TwoFactor,
    Dashboard,
    Register,
    Login,
    ProtectedRoute,
    AuthedRoute,
    Navbar,
    Footer,
    Sidebar,
    ThemeSettings
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
    Calendar,
    Stacked,
    Pyramid,
    Kanban,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor,
    SignIn,
    Transfer
} from './pages';
import './App.css';
import UseToken from './components/UseToken';


import {useStateContext} from './contexts/ContextProvider';


function setToken(userToken) {
    console.log("clearing token");
    sessionStorage.removeItem('token');

    console.log("setting token");
    console.log(userToken.data.id);
    sessionStorage.setItem('token', JSON.stringify(userToken));
    console.log(userToken)
}

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


    if (!getToken()) {
        return <SignIn setToken={setToken}/>
    }

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                        <TooltipComponent
                            content="Settings"
                            position="Top"
                        >
                            <button
                                type="button"
                                onClick={() => setThemeSettings(true)}
                                style={{background: currentColor, borderRadius: '50%'}}
                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            >
                                <FiSettings/>
                            </button>

                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-16 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            {/*
            <div className="w-0 dark:bg-secondary-dark-bg">
            */}
                            <Sidebar/>
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
                            <Navbar/>
                        </div>
                        <div>
                            {themeSettings && (<ThemeSettings/>)}

                            <Routes>
                                {/* fund  */}
                                <Route path="/" element={(<SignIn setToken={setToken}/>)}/>
                                <Route path="/accounts" element={(<Accounts/>)}/>
                                <Route path="/assets" element={(<Assets/>)}/>

                                {/* app  */}
                                <Route path="/clearance" element={<Clearance/>}/>
                                <Route path="/settlement" element={<Settlement/>}/>
                                <Route path="/network" element={<Network/>}/>
                                <Route path="/whitelist" element={<Whitelist/>}/>
                                <Route path="/defi" element={<Defi/>}/>
                                <Route path="/Transactions" element={<Tx/>}/>
                                <Route path="/Exchange" element={<Exchange/>}/>
                                <Route path="/transfer" element={<Transfer/>}/>

                                {/* login  */}

                                <Route path="/login" component={Login}/>
                                <Route path="/register" component={Register}/>
                                <Route exact path="/dashboard" component={Dashboard}/>
                                <Route path="/dashboard/2fa" component={TwoFactor}/>
                                <Route path="/user/validate" component={Validation}/>

                                {/* apps  */}
                                <Route path="/kanban" element={<Kanban/>}/>
                                <Route path="/editor" element={<Editor/>}/>
                                <Route path="/calendar" element={<Calendar/>}/>
                                <Route path="/color-picker" element={<ColorPicker/>}/>

                                {/* charts  */}
                                <Route path="/line" element={<Line/>}/>
                                <Route path="/area" element={<Area/>}/>
                                <Route path="/bar" element={<Bar/>}/>
                                <Route path="/pie" element={<Pie/>}/>
                                <Route path="/financial" element={<Financial/>}/>
                                <Route path="/color-mapping" element={<ColorMapping/>}/>
                                <Route path="/pyramid" element={<Pyramid/>}/>
                                <Route path="/stacked" element={<Stacked/>}/>

                            </Routes>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
