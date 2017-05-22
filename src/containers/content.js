import React, {Component} from "react"

import Timetable from './timetable'
import Speakers from './speakers'
import Guests from './special-guests'

class Content extends Component{
    render(){
        return(
            <div>
                <section className="home-top hidden-xs">
                    <div className="social-links">
                        <a href=""><img src={require('../../public/img/ic_facebook_share.png')} /></a><br />
                        <a href=""><img src={require('../../public/img/ic_twtiter_share.png')} /></a><br />
                        <a href=""><img src={require('../../public/img/ic_instagram_share.png')} /></a>
                    </div>
                    <div className="barcamp-hashtag">
                        <h3>#barcampevn17</h3>
                    </div>
                    <div className="light-bulb">
                        <img src={require('../../public/img/light-bulb.png')} />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 about-event">
                                <h2>May 27-28</h2>
                                <p>The most wanted IT and<br />
                                    Media event in Armenia<br />
                                    coming in the soon
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4"></div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8"></div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 app-links">
                                <a target="_blank" href="http://www.hexdivision.com/">
                                    <img src={require('../../public/img/googleplay.png')} />
                                </a>
                                <a target="_blank" href="http://www.hexdivision.com/">
                                    <img src={require('../../public/img/appstore.png')} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-top-mobile visible-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h2>May 27-28</h2>
                                <p>The most wanted IT and<br />
                                    Media event in Armenia<br />
                                    coming in the soon
                                </p>
                                <div className="barcamp-hashtag-mobile">
                                    <h3>#barcampevn17</h3>
                                    <div className="social-links-mobile">
                                        <a href=""><img src={require('../../public/img/ic_facebook_share.png')} /></a><br />
                                        <a href=""><img src={require('../../public/img/ic_twtiter_share.png')} /></a><br />
                                        <a href=""><img src={require('../../public/img/ic_instagram_share.png')} /></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Timetable />
                <Guests/>
                <Speakers/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="sponsors-top-bar">
                                <img src={require('../../public/img/sponsors.png')} />
                            </div>
                        </div>
                    </div>
                    <div className="row sponsors-row">
                        <h4>General</h4>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img className="general" src={require('../../public/img/Ucom.png')} />
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-10"></div>
                    </div>
                    <div className="row sponsors-row">
                        <h4>Sponsors</h4>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/workfront.png')} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/sfl.png')} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/vivaro.png')} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/synergy.png')} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/ginosi.png')} />
                            </div>
                        </div>
                    </div>
                    <div className="row sponsors-row">
                        <h4>Partners</h4>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/mediacenter.png')} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/aua.png')} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/hex.png')} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/simply.png')} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    </div>
                    <div className="row sponsors-row">
                        <h4>Information sponsors</h4>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <img src={require('../../public/img/Startuparmenia.png')} />
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-10"></div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Content