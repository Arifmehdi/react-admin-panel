import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <Outlet><Dashboard></Dashboard></Outlet>

        </div>
    );
};

export default Main;