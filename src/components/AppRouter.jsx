import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Register from "../pages/Register";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="Login" element={<Login />}/>
            <Route path="register" element={<Register/>}/>
            <Route path="*" element={<Posts/>}/>
        </Routes>
    );
};

export default AppRouter;