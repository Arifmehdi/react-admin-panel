import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
                    {/* <!--start sidebar --> */}
        <div className="sidebar-wrapper" data-simplebar="true">
            <div className="sidebar-header">
                <div>
                    <img src="assets/images/logo.png" className="logo-icon" alt="logo icon"/>
                </div>
                <div>
                    <h4 className="logo-text">AdminPanel</h4>
                </div>
                <div className="toggle-icon ms-auto"><i className="las la-bars"></i>
                </div>
            </div>
            {/* <!--navigation--> */}
            <ul className="metismenu" id="menu">
                <li>
                    <Link to="/" className="">
                        <div className="parent-icon"><i className="las la-home"></i>
                        </div>
                        <div className="menu-title">Dashboard</div>
                    </Link>
                </li>
                <li>
                    <a href="javascript:;" className="has-arrow">
                        <div className="parent-icon"><i className="las la-border-all"></i>
                        </div>
                        <div className="menu-title">Application</div>
                    </a>
                    <ul>
                        <li> <a href="app-emailbox.html"><i className="las la-arrow-right"></i>Email</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-label">Forms & Tables</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bi bi-file-earmark-break"></i>
                        </div>
                        <div className="menu-title">Forms</div>
                    </a>
                    <ul>
                        <li> <a href="#"><i className="las la-arrow-right"></i>Form Elements</a>
                        </li>
                        <li> <a href="#"><i className="las la-arrow-right"></i>Input Groups</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bi bi-file-earmark-spreadsheet"></i>
                        </div>
                        <div className="menu-title">Tables</div>
                    </a>
                    <ul>
                        <li> <a href="table-basic-table.html"><i className="las la-arrow-right"></i>Basic Table</a>
                        </li>
                        <li> <a href="table-advance-tables.html"><i className="las la-arrow-right"></i>Advance Tables</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/profile">
                        <div className="parent-icon"><i className="bi bi-person-check"></i>
                        </div>
                        <div className="menu-title">User Profile</div>
                    </Link>
                </li>











                <li className="menu-label">Others</li>
                <li>
                    <a className="has-arrow" href="javascript:;">
                        <div className="parent-icon"><i className="bi bi-list-task"></i>
                        </div>
                        <div className="menu-title">Menu Levels</div>
                    </a>
                    <ul>
                        <li> <a className="has-arrow" href="javascript:;"><i className="las la-arrow-right"></i>Level One</a>
                            <ul>
                                <li> <a className="has-arrow" href="javascript:;"><i className="las la-arrow-right"></i>Level Two</a>
                                    <ul>
                                        <li> <a href="javascript:;"><i className="las la-arrow-right"></i>Level Three</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            {/* <!--end navigation--> */}
        </div>
        {/* <!--end sidebar --> */}
        </div>
    );
};

export default Sidebar;