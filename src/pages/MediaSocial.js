import React, { Component } from "react";
import "../stylesheets/media/socialStyle.css";
import PageTemplate from "../PageTemplate";
import Footer from "../Footer";

class MediaSocial extends Component {
    render() {
        return (
            <div className="section-wrapper">
                <PageTemplate pageTitle={this.props.sectionName} pageSubtitle={this.props.subsection} pageInfo={this.props.sectionKeys}/>
                <div id="media-section">
                    <img className="social-image-logo" id="facebookLogo" src="/images/socialMediaLogos/facebook.png"/>
                    <a href="https://instagram.com/falcotronix">
                        <img className="social-image-logo" id="instagramLogo" src="/images/socialMediaLogos/instagram.png"/>
                    </a>
                    <img className="social-image-logo" id="youtubeLogo" src="/images/socialMediaLogos/youtube.png"/>

                    <div className="social-description" id="facebookDescription">
                        <h2> Facebook </h2>
                        <h3> Find all events </h3>
                    </div>

                    <div className="social-description" id="instagramDescription">
                        <a href="https://instagram.com/falcotronix">
                        <h2> Instagram </h2>
                        <h3> Follow us </h3>
                        </a>
                    </div>

                    <div className="social-description" id="youtubeDescription">
                        <h2> Youtube </h2>
                        <h3> All our videos </h3>
                    </div>
                    <div id="social-image"></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MediaSocial;