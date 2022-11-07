import React, {useState} from 'react';
import './app.css'
import {Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import Layout from "./Layout";
import SignUp from "./Pages/SignUp";
import {Items} from "./Components/Tabs/FirstTab/TabContent";
import OpenCard from "./Pages/OpenCard";
import SignIn from "./Pages/SignIn";
import ResetPassword from "./Pages/ResetPassword";

function App() {
    const [openPost, setOpenPost] = useState<Items[]>([])
    function data(post: Items[]): void {
        setOpenPost(post)
        console.log(openPost)
    }

    const [sign, setSign] = useState<boolean>(false)

  return (
    <Routes>
        <Route path='/' element={<Layout sign={sign}/>}>
            <Route index element={<Main data={data}/>}/>
            <Route path='post/:id' element={<OpenCard/>}/>
            <Route path='sign-up' element={<SignUp/>}/>
            <Route path='sign-in' element={<SignIn/>}/>
            <Route path='reset-pass' element={<ResetPassword/>}/>
        </Route>
    </Routes>
  );
}

export default App;
