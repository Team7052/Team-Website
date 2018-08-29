import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./stylesheets/global/navbarStyle.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarState: "top",
            menuIsHidden: true
        }
        this.toggleMobileNavbar = this.toggleMobileNavbar.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > window.innerHeight * 0.7) {
                this.setState({
                    navbarState: "floating"
                })
            }
            else {
                this.setState({
                    navbarState: "top"
                })
            }
        });
        this.changeDropdownPositionOnHover();
    }
    render() {
        let navbarClass = this.state.navbarState === "top" ? "navbar navbar-top" : "navbar navbar-fixed";
        let overlayClass = this.state.menuIsHidden ? "navbar-overlay" : "navbar-overlay navbar-overlay-shown";
        document.body.className = this.state.menuIsHidden ? "" : "no-scroll";
        
        return (
            <div>
                <div className={overlayClass}></div>
                <div className={navbarClass}>
                    <img className="navbar-logo-image" src="/images/logo.png" alt="Team Logo"/>
                    <div id="navbar-menu-icon" onClick={this.toggleMobileNavbar}>
                        <div className={this.state.menuIsHidden ? "menu-icon-item" : "menu-icon-item menu-icon-item-x-top"}></div>
                        <div className={this.state.menuIsHidden ? "menu-icon-item" : "menu-icon-item menu-icon-item-x-mid"}></div>
                        <div className={this.state.menuIsHidden ? "menu-icon-item" : "menu-icon-item menu-icon-item-x-bot"}></div>
                    </div>
                    <div className={this.state.menuIsHidden ? "navbar-element-no-dropdown" : "navbar-element-no-dropdown navbar-element-menu-shown"}>
                        <Link to="/" onClick={this.toggleMobileNavbar}>Home</Link>
                    </div>
                    {
                        Object.keys(this.props.pages).map((item, i) => {
                            return (
                                <NavbarDropdown 
                                    key={i} 
                                    dropdownTitle={item} 
                                    dropdown={this.props.pages[item]} 
                                    color={this.state.navbarState === "top" ? "light" : "dark"} 
                                    showItems={!this.state.menuIsHidden} 
                                    itemSelected={this.toggleMobileNavbar}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    toggleMobileNavbar() {
        this.setState({
            menuIsHidden: !this.state.menuIsHidden
        })
    }

    changeDropdownPositionOnHover() {
        let navElements = document.getElementsByClassName('navbar-element');
        for (let elem of navElements) {
            elem.addEventListener('mouseover', function(e) {
                if (window.innerWidth < 600) {
                    var dropdownMenu = e.target.parentElement;

                    if (e.target.classList[0] == "dropdown-title") {
                        dropdownMenu = e.target.parentElement.querySelectorAll('.navbar-dropdown-element-list')[0];
                    }

                    let marginIncrease = dropdownMenu.offsetHeight;
                    // get all navbar-elements
                    let navElements = document.getElementsByClassName("navbar-element");
                    var prev = false;
                    for (let elem of navElements) {
                        if (prev) {
                            elem.style.margin = "calc(4vh + " + marginIncrease + "px) 5px 0";
                            prev = false;
                        }
                        if (elem == dropdownMenu.parentElement) {
                            prev = true;
                        }
                    }
                }
            });
            elem.addEventListener("mouseleave", (e) => {
                let navElements = document.getElementsByClassName("navbar-element");
                if (window.innerWidth < 600) {
                    for (let elem of navElements) {
                        elem.style.margin="4vh 5px";
                    }
                }
                else {
                    elem.style.margin = "none";
                }
            })
        }
    }
}

export default Navbar;

class NavbarDropdown extends Component {
    render() {
        let elementClass = this.props.color === "dark" ? 'navbar-element navbar-element-dark' : "navbar-element";
        if (this.props.showItems) {elementClass += " navbar-element-menu-shown"};
        let listItemClass = this.props.color === "dark" ? "navbar-dropdown-element-list-item navbar-dropdown-element-list-item-dark" : "navbar-dropdown-element-list-item";
        return(
            <div className={elementClass}>
                <div className="dropdown-title">{this.props.dropdownTitle}</div>
                <ul className="navbar-dropdown-element-list">
                    {
                        this.props.dropdown.map((item, i) => {
                            return (
                                <li key={i} className={listItemClass}>
                                    <Link to={item.link} onClick={this.props.itemSelected}>{item.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}