import React, { Component } from "react";
import "../stylesheets/about/aboutMembers.css"
import PageTemplate from "../PageTemplate";
import Footer from "../Footer";

class AboutMembers extends Component {
    colours = ["#EF847B", "#ED6F65", "#EB5A4F", "#E94539", "#E73023", "#D02B1F", "#B9261B", "#A22117", "#8B1C13", "#74170F", "#5D120B", "#460D07"]
    render() {
        let currentIndex = 0;
        let incrementing = true
        return (
            <div className="section-wrapper">
                <PageTemplate pageTitle={this.props.sectionName} pageSubtitle={this.props.subsection} pageInfo={this.props.sectionKeys} />
                <div id="about-members-section">
                    {
                        this.props.data.members.map((member, i) => {
                            if (currentIndex >= this.colours.length - 1 && incrementing) incrementing = false;
                            if (currentIndex <= 0 && !incrementing) incrementing = true;
                            let index = member.isLead ? currentIndex : (incrementing ? currentIndex++ : currentIndex--);
                            console.log(index + " " + this.colours.length + " " + incrementing);
                            console.log(this.props.subsection);
                            return <Member isMentor={this.props.subsection === "Mentors"} info={member} key={i} backgroundColor={this.colours[index]}/>
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
        let containerClass = this.props.info.isLead ? "member-container" : "member-container without-image"
        return (
            <div className={containerClass} style={{
                backgroundColor: this.props.backgroundColor
            }}>
                {
                    this.props.info.isLead ? <img className="member-image" src={"/images/memberImages/" + this.props.info.name + ".png"} alt={this.props.info.name}/> : ""
                }
                <div className="member-name">{this.props.info.name}</div>
                <div className="member-overlay-view">
                    <div className="member-item member-role">{this.props.info.role}</div>
                    <div className="member-item member-grade">Grade {this.props.info.grade}</div>
                    <div className="member-item member-email">{this.props.info.email}</div>
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
                </div>  
            </div>
        );
    }
}