import React, { Component } from "react";
import PageTemplate from "../PageTemplate";
import "../stylesheets/resources/blogStyle.css";
import Footer from "../Footer";

class ResourcesBlog extends Component {
    render() {
        return (
            <div className="section-wrapper">
                <PageTemplate pageTitle={this.props.sectionName} pageSubtitle={this.props.subsection} pageInfo={this.props.sectionKeys}/>
                <div id="blog-section">
                    View our blog on <a href="https://www.medium.com/@falcotronix">Medium</a>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ResourcesBlog;