import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./stylesheets/global/navbarStyle.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-overlay"></div>
                <div id="navbar">
                    <img className="navbar-logo-image" src="/images/logo.png" alt="Team Logo"/>
                    <div id="navbar-menu-icon">
                        <div className="menu-icon-item"></div>
                        <div className="menu-icon-item"></div>
                        <div className="menu-icon-item"></div>
                    </div>
                    <div className="navbar-element-no-dropdown"><Link to="/">Home</Link></div>
                    {
                        Object.keys(this.props.pages).map((item, i) => {
                            return <NavbarDropdown key={i} dropdownTitle={item} dropdown={this.props.pages[item]}/>
                        })
                    }
                    
                </div>
            </div>
        );
    }
}

export default Navbar;

class NavbarDropdown extends Component {
    render() {
        return(
            <div className="navbar-element">
                <div className="dropdown-title">{this.props.dropdownTitle }</div>
                <ul className="navbar-dropdown-element-list">
                    {
                        this.props.dropdown.map((item, i) => {
                            return (
                                <li key={i} className="navbar-dropdown-element-list-item">
                                    <Link to={item.link}>{item.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}