import React, { Component } from 'react';

export default class Livestream extends Component {
    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="livestream-top-bar">
                                <img src={require('../../public/img/Livestream.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="livestream-wrapper">
                    <div className="container livestream-section">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 room-select">
                                <ul>
                                    <li><a href="">Big Hall</a></li>
                                    <li><a href="">208E</a></li>
                                    <li><a href="">213W</a></li>
                                    <li><a href="">241W</a></li>
                                    <li><a href="">113W</a></li>
                                    <li><a href="">114W</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="video-wrapper">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0fnO3oNR6IA" frameBorder="0" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3"></div>
                        </div>
                    </div>
                    <div className="red-box"></div>
                </section>
            </div>
        );
    }
}

