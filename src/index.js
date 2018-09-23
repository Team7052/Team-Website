import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "animate.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// pages
import AboutTheTeam from './pages/AboutTheTeam';
import AboutMembers from './pages/AboutMembers';
import MediaGallery from './pages/MediaGallery';
import MediaSocial from './pages/MediaSocial';
import Sponsors from "./pages/Sponsors";
import ResourcesBlog from "./pages/ResourcesBlog";

// data
import TeamMembers from "./resources/membersData";
import TeamMentors from "./resources/mentorsData";
import GalleryPhotos from './resources/galleryData';
import SponsorsData from "./resources/SponsorsData";

// create navbar object
const pageDocument = {
    About: [
        { name: "The Team", link: "/about/team", component: AboutTheTeam, data: {}},
        { name: "Members", link: "/about/members", component: AboutMembers , data: {members: TeamMembers}},
        { name: "Mentors", link: "/about/mentors", component: AboutMembers, data: {members: TeamMentors}},
    ],
    Media: [
        {name: "Gallery", link: "/media/gallery", component: MediaGallery, data: {gallery: GalleryPhotos}},
        {name: "Social", link: "/media/social", component: MediaSocial, data: {}}
    ],
    Sponsors: [
        {name: "Platinum", link: "/sponsors/platinum", component: Sponsors, data: SponsorsData},
        {name: "Gold", link: "/sponsors/gold", component: Sponsors, data: SponsorsData},
        {name: "Silver", link: "/sponsors/silver", component: Sponsors, data: SponsorsData}
    ],
    Resources: [
        {name: "Blog", link: "/resources/blog", component: ResourcesBlog, data: {}}
    ]
}

ReactDOM.render(<App pages={pageDocument} />, document.getElementById('root'));
registerServiceWorker();
