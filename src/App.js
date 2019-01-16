import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Navbar from "./Navbar";
import { initClient, getInformation } from './js/spreadsheetFetcher';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spreadsheetData: {}
        };
    }

    componentDidMount() {
        window.gapi.load("client", () => {
            initClient().then(() => {
                getInformation().then((information) => {
                    this.setState({
                        spreadsheetData: information
                    });
                })
            });
        });
    }
    render() {
        let {spreadsheetData} = this.state;
        return (
            <Router>
                <div>
                    <Navbar pages={this.props.pages}/>
                    <Route path="/" exact={true} component={HomePage}/>
                    {
                        // map each section keys ("About", "Media", etc)
                        Object.keys(this.props.pages).map((sectionName) => {
                            return this.props.pages[sectionName].map((subsection, i) => {
                                let data = subsection.data;
                                if (subsection.name === "Members" || subsection.name === "Mentors" || sectionName === "Sponsors") {
                                    let stateName = sectionName !== "Sponsors" ? "current" + subsection.name : "current" + sectionName;
                                    console.log(stateName);
                                    if (spreadsheetData[stateName]) data = spreadsheetData[stateName];
                                    
                                }
                                return <Route key={i} path={subsection.link} render={
                                    (props) => <subsection.component // component for the specific subsection
                                    sectionName={sectionName} // name such as "About", "Media" etc.
                                    sectionKeys={this.props.pages[sectionName].map(function(item) { return {name: item.name, link: item.link}})} // all subsection names and links in section such as [("The Team", "/about/, "Members", "Mentors"] etc.
                                    subsection={subsection.name} // specific subsection name
                                    data={data} /> // specific subsection data to be passed on as props
                                } />
                            })
                        })
                    }
                </div>
            </Router>
        );
    }
}

export default App;
