import React, {Component} from "react";
import "../stylesheets/sponsors/sponsorsStyle.css";
import "../stylesheets/global/globalStyle.css";
import PageTemplate from "../PageTemplate";
import Footer from "../Footer";

class Sponsors extends Component {
    render() {
        return (
            <div className="section-wrapper">
                <PageTemplate pageTitle={this.props.sectionName} pageSubtitle="" pageInfo={this.props.sectionKeys} />
                    <div id="sponsors-container">
                        <div className="sponsor-level-title"> Platinum Sponsors </div>
                        {
                            this.props.data.platinum && this.props.data.platinum.map((sponsor, i) => {
                                return <PlatinumGoldSponsor sponsor={sponsor} key={i} />
                            })
                        }
                        <div className="sponsor-level-title">Gold Sponsors</div>
                        {
                            this.props.data.gold && this.props.data.gold.map((sponsor, i) => {
                                return <PlatinumGoldSponsor sponsor={sponsor} key={i} />
                            })
                        }
                        <div className="sponsor-level-title">Silver Sponsors</div>
                        <div className="minor-sponsors-container">
                            { 
                                this.props.data.silver && this.props.data.silver.map((sponsor, i) => {
                                    return <SilverBronzeSponsor sponsor={sponsor} key={i} />
                                })
                            }
                        </div>
                        <div className="sponsor-level-title">Bronze Sponsors</div>
                        <div className="minor-sponsors-container last-minor-sponsors-container">
                            {
                                this.props.data.bronze && this.props.data.bronze.map((sponsor, i) => {
                                    return <SilverBronzeSponsor sponsor={sponsor} key={i} />
                                })
                            }
                        </div>
                    </div>
                
                <Footer/>
            </div>
        );
    }
}

class PlatinumGoldSponsor extends Component {
    render() {
        return (
            <div className="major-sponsor-item">
                <img src={"/images/sponsorImages/" + this.props.sponsor.company + ".png"} className="major-sponsor-item-image" alt="not found" />
                <div className="major-sponsor-item-title">{this.props.sponsor.company}</div>
                <div className="major-sponsor-item-description">{this.props.sponsor.description}</div>
                <a className="major-sponsor-item-link underlined-link" href={this.props.sponsor.link} target="_blank">See Site</a>
            </div>
        );
    }
}
class SilverBronzeSponsor extends Component {
    render() {
        return (
            <div className="minor-sponsor-item">
                <img className="minor-sponsor-item-image" src={"/images/sponsorImages/" + this.props.sponsor.company + ".png"} alt="not found" />
                
                <div className="minor-sponsor-other-content">
                    <div className="minor-sponsor-item-title">{this.props.sponsor.company}</div>
                    <div className="minor-sponsor-item-description">{this.props.sponsor.description}</div>
                    <a className="minor-sponsor-item-link underlined-link" href={this.props.sponsor.link} target="_blank">See Site</a>
                </div>
            </div>
        );
    }
}

export default Sponsors;