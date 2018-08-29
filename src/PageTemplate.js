import React, {Component} from "react";
import "./stylesheets/global/subNavbarStyle.css"
import { Link } from "react-router-dom";

class PageTemplate extends Component {
    render() {
        return (
            <div className="page" id="templatePage">
                {/* navbar automatically loaded from ajax */ }
                <div className="page-main-container">
                    { /* Create background blurred image */ }
                    <div className="page-background-image" id="outreach-background-image"></div>
                    
                    { /* Content that is in the about page, when user first loads screen */ }
                    { /* Next two are global elements since they are used on every page */ }
                    <div className="page-title-section">
                        <div id="pageTitle" className="page-main-title">{this.props.pageTitle}</div>
                        <p id="pageSubtitle" className="page-main-subtitle">{this.props.pageSubtitle.toLowerCase()}</p>
                    </div>
                    { /* Renamed to sub-navbar since this will be a global element (used in every page) */ }
                    <div id="subnav" className="sub-navbar">
                        {this.props.pageInfo.map((item, i) => {
                            console.log(this.props.pageSubtitle);
                            console.log(this.props.name);
                            console.log(this.props.pageSubtitle == item.name);
                            return (
                                <div key={i} className={this.props.pageSubtitle.toLowerCase() == item.name.toLowerCase() ? 'sub-navbar-element sub-navbar-element-selected' : 'sub-navbar-element'}>
                                    <Link to={item.link}> {item.name} </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTemplate;