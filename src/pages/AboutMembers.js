import React, { Component } from "react";
import "../stylesheets/about/aboutMembers.css"
import PageTemplate from "../PageTemplate";
import Footer from "../Footer";

class AboutMembers extends Component {
    render() {
        return (
            <div className="section-wrapper">
                <PageTemplate pageTitle={this.props.sectionName} pageSubtitle={this.props.subsection} pageInfo={this.props.sectionKeys} />
                <div id="about-members-section">
                    {
                        this.props.data.members.map((member, i) => {
                            return <Member isMentor={this.props.subsection === "Member"} info={member} key={i}/>
                        })
                    }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AboutMembers;

class Member extends Component {
    render() {
        if (this.props.isMentor) {
            return this.mentorComponent();
        }
        return this.memberComponent();
    }

    memberComponent() {
        return (
            <div className="member-container">
                <img className="member-image" src={"/images/memberImages/" + this.props.info.name + ".png"} alt={this.props.info.name}/>
                <div className="member-name">{this.props.info.name}</div>
                <div className="member-overlay-view">
                    <div className="member-item member-role">{this.props.info.role}</div>
                    <div className="member-item member-grade">{this.props.info.grade}</div>
                    <div className="member-item member-email">{this.props.info.email}</div>
                    <div className="member-item member-description">{this.props.info.description}</div>
                </div>  
            </div>
        );
    }
    mentorComponent() {
        return (
            <div className="member-container">
                <img className="member-image" src={"/images/mentorImages/" + this.props.info.name + ".png"}  alt={this.props.info.name}/>
                <div className="member-name">{this.props.info.name}</div>
                <div className="member-overlay-view">
                    <div className="member-item member-role">{this.props.info.role}</div>
                    <div className="member-item member-email">{this.props.info.email}</div>
                    <div className="member-item member-description">{this.props.info.description}</div>
                </div>  
            </div>
        );
    }
}