import React, {FC} from 'react';
import Header from "./Components/Header/Header";
import Title from "./Components/UI/title/Title";
import Tabs from "./Components/Tabs/Tabs";
import Footer from "./Components/Footer/Footer";
import {Outlet} from "react-router-dom";

interface Props {
    sign: boolean,
}

const Layout: FC<Props> = (props) => {
    return (
        <div className="App">
            <Header sign={props.sign}/>
            <div className="wrapper">
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;