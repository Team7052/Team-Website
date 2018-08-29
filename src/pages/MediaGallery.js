import React, { Component } from "react";
import PageTemplate from "../PageTemplate";
import "../stylesheets/media/galleryStyle.css";
import Footer from "../Footer";

class MediaGallery extends Component {
    constructor(props) {
        super(props);
        this.handleGalleryClick = this.handleGalleryClick.bind(this);
        this.leaveGalleryClick = this.leaveGalleryClick.bind(this);
        this.state = {showingModal: false, currentGalleryItem: null, currentGalleryYear: 2018, imagePaths: []}
    }

    render() {
        if (this.state.showingModal && this.state.currentGalleryItem) {
            return (
                <div className="section-wrapper">
                    <PageTemplate pageTitle={this.props.sectionName} pageSubtitle={this.props.subsection} pageInfo={this.props.sectionKeys} />
                    <div id="media-gallery-section">
                        <div id='gallery-modal'>
                            <div id='gallery-modal-exit' onClick={this.leaveGalleryClick}>x</div>
                            <div id='gallery-modal-title'>{this.state.currentGalleryItem.title}</div>
                            <div id='gallery-modal-date'>{this.state.currentGalleryItem.date}</div>
                            <div id='gallery-modal-images-container'>
                                {
                                    // fetch 10 images asynchronously and if one image is null then stop
                                    this.state.imagePaths.map((path, i) => {
                                        return <img className="gallery-modal-image" src={path} key={i} alt="not found" />
                                    })
                                }
                            </div>
                        </div>
                        {
                            Object.keys(this.props.data.gallery).map((yearStr, i) => {
                                let year = parseInt(yearStr.substr(4), 10);
                                return (
                                    <GalleryYearSection key={i} year={year} gallery={this.props.data.gallery[yearStr]} clickEvent={this.handleGalleryClick}/>
                                )
                            })
                        }
                    </div>
                    <Footer/>
                </div>
            );
        }
        else {
            return (
                <div className="section-wrapper">
                    <PageTemplate pageTitle={this.props.sectionName} pageSubtitle={this.props.subsection.toLowerCase()} pageInfo={this.props.sectionKeys} />
                    <div id="media-gallery-section">
                        {
                            Object.keys(this.props.data.gallery).map((yearStr, i) => {
                                let year = parseInt(yearStr.substr(4), 10);
                                return (
                                    <GalleryYearSection key={i} year={year} gallery={this.props.data.gallery[yearStr]} clickEvent={this.handleGalleryClick}/>
                                )
                            })
                        }
                    </div>
                    <Footer/>
                </div>
            )
        }
        
    }
    handleGalleryClick(folderName, year) {
        // get gallery item
        let galleryItem = this.props.data.gallery["year" + year].find((item) => item.folderName === folderName);
        if (galleryItem != null) {
            this.setState({showingModal: true, currentGalleryItem: galleryItem, currentGalleryYear: year}, this.startFetchingImages);
        }
    }
    leaveGalleryClick() {
        this.setState({showingModal: false, currentGalleryItem: null, imagePaths: []});
    }

    startFetchingImages(startIndex = 0) {
        if (startIndex === 0) {
            fetch("/images/gallery/year" + this.state.currentGalleryYear + "/" + this.state.currentGalleryItem.folderName + "/thumbnail-0preview-image.png")
            .then((response) => response.arrayBuffer())
            .then((buffer) => {
                // load an image asynchronously
                var base64Flag = "data:image/png;base64,";
                var binary = '';
                var bytes = [].slice.call(new Uint8Array(buffer));
                bytes.forEach((b) => binary += String.fromCharCode(b));

                var imageStr = window.btoa(binary);
                var newArr = this.state.imagePaths;
                newArr.unshift(base64Flag + imageStr);
                console.log("New added");
                this.setState({imagePaths: newArr});
            })
        }
        
        for (let i = startIndex; i < startIndex + 10; i++) {
            if (this.state.showingModal) {
                fetch("/images/gallery/year" + this.state.currentGalleryYear + "/" + this.state.currentGalleryItem.folderName + "/thumbnail-image" + i + ".jpg")
                    .then((response) => {
                        console.log(response);
                        return response.arrayBuffer()
                    })
                    .then((buffer) => {
                        // load an image asynchronously
                        var base64Flag = "data:image/jpg;base64,";
                        var binary = '';
                        var bytes = [].slice.call(new Uint8Array(buffer));
                        bytes.forEach((b) => binary += String.fromCharCode(b));

                        var imageStr = window.btoa(binary);
                        console.log(buffer.byteLength);
                        if (buffer.byteLength > 10000) {
                            var newArr = this.state.imagePaths;
                            newArr.push(base64Flag + imageStr);
                            if (i === startIndex + 9) {
                                this.setState({imagePaths: newArr}, () => this.startFetchingImages(startIndex + 10));
                            }
                            else {
                                this.setState({imagePaths: newArr});
                            }
                        }
                        
                    });
            }
            
        }
    }
}
export default MediaGallery;

class GalleryYearSection extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <div className="gallery-year-title">{this.props.year}</div>
                <div className="gallery-year-section">
                    {
                        this.props.gallery.map((item, i) => {
                            return (
                                <div className="gallery-item" key={i}>
                                    <div className="gallery-image-crop" onClick={(e) => this.handleClick(item.folderName)}>
                                        <img className="gallery-item-image" src={"/images/gallery/year" + this.props.year + "/" + item.folderName + "/thumbnail-0preview-image.png"} alt="not found"/>
                                    </div>
                                    <div className="gallery-item-title" onClick={(e) => this.handleClick(item.folderName)}>{item.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    handleClick(folderName) {
        this.props.clickEvent(folderName, this.props.year);
    }
}

