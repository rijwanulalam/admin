import React from 'react';
import './Sidebar.css';
import logo from "../../assets/logo.gif";
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={logo} alt="logo" />
                    <h1>AASTUDIO</h1>
                </div>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>Upload</h2>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <Link to="inputBooks">Input Books</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;