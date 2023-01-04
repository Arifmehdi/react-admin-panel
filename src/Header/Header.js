import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
                    {/* <!--start top header--> */}
        <header className="top-header wrapper">
            <nav className="navbar navbar-expand">
                <div className="mobile-toggle-icon d-xl-none">
                    <i className="las la-bars"></i>
                </div>
                <div className="top-navbar-right ms-3">
                    <ul className="navbar-nav align-items-center text-center">
                        <li className="">
                            <a className="nav-link" id="DarkTheme" title="Dark">
                                <div className="notifications">
                                    <i className="las la-moon"></i>
                                </div>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" id="LightTheme" title="Light">
                                <div className="notifications">
                                    <i className="las la-sun"></i>
                                </div>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" id="SemiDarkTheme" title="Semi Dark">
                                <div className="notifications">
                                    <i className="las la-adjust"></i>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item dropdown dropdown-large">
                            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="profile.html" data-bs-toggle="dropdown">
                                <div className="user-setting d-flex align-items-center gap-1">
                                    <img src="assets/images/avatars/avatar-1.png" className="user-img" alt=""/>
                                    <div className="user-name d-none d-sm-block">Jhon Deo</div>
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex align-items-center">
                                            <img src="assets/images/avatars/avatar-1.png" alt="" className="rounded-circle" width="60" height="60"/>
                                            <div className="ms-3">
                                                <h6 className="mb-0 dropdown-user-name">Jhon Deo</h6>
                                                <small className="mb-0 dropdown-user-designation text-secondary">HR Manager</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/profile">
                                        <div className="d-flex align-items-center">
                                            <div className="setting-icon"><i className="las la-user"></i></div>
                                            <div className="setting-text ms-3"><span>Profile</span></div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex align-items-center">
                                            <div className="setting-icon"><i className="las la-cog"></i></div>
                                            <div className="setting-text ms-3"><span>Setting</span></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="authentication-signup-with-header-footer.html">
                                        <div className="d-flex align-items-center">
                                            <div className="setting-icon"><i className="las la-sign-out-alt"></i></div>
                                            <div className="setting-text ms-3"><span>Logout</span></div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        {/* <!--end top header--> */}
        </div>
    );
};

export default Header;