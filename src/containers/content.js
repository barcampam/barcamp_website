import React, {Component} from "react"

import Timetable from './timetable'
import Speakers from './speakers'
import Guests from './special-guests'
import Livestream from './livestream'

class Content extends Component{
    render(){
        return(
            <div>
                <section className="home-top hidden-xs">
                    <div className="social-links">
                        <a target="_blank" href="https://www.facebook.com/barcampevn/"><img src={require('../../public/img/ic_facebook_share.png')} /></a><br />
                        <a target="_blank" href="https://twitter.com/barcampam"><img src={require('../../public/img/ic_twtiter_share.png')} /></a><br />
                        <a target="_blank" href="https://www.instagram.com/barcamp_yerevan/"><img src={require('../../public/img/ic_instagram_share.png')} /></a>
                    </div>
                    <div className="barcamp-hashtag">
                        <a target="_blank" href="https://www.eventbrite.co.uk/e/barcamp-yerevan-2017-tickets-33995486415">Register</a>
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
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4"></div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8"></div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 app-links">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.barcampevn">
                                    <img src={require('../../public/img/googleplay.png')} />
                                </a>
                                <a target="_blank" href="https://itunes.apple.com/us/app/barcampevn/id1239188924?mt=8">
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
                                </p>
                                <div className="barcamp-hashtag-mobile">
                                    <a className="registration" target="_blank" href="https://www.eventbrite.co.uk/e/barcamp-yerevan-2017-tickets-33995486415">Register</a>
                                    <h3>#barcampevn17</h3>
                                    <div className="social-links-mobile">
                                        <a target="_blank" href="https://www.facebook.com/barcampevn/"><img src={require('../../public/img/ic_facebook_share.png')} /></a><br />
                                        <a target="_blank" href="https://twitter.com/barcampam"><img src={require('../../public/img/ic_twtiter_share.png')} /></a><br />
                                        <a target="_blank" href="https://www.instagram.com/barcamp_yerevan/"><img src={require('../../public/img/ic_instagram_share.png')} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Timetable />
                <Guests/>
                <Speakers/>
                <Livestream/>
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
                                <a target="_blank" href="https://www.ucom.am">
                                    <img className="general" src={require('../../public/img/Ucom.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-10"></div>
                    </div>
                    <div className="row sponsors-row">
                        <h4>Sponsors</h4>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="https://www.workfront.com/">
                                <img src={require('../../public/img/workfront.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="https://sflpro.com/">
                                <img src={require('../../public/img/sfl.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="https://www.ginosi.com/">
                                <img src={require('../../public/img/ginosi.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="https://www.betconstruct.com/#/">
                                <img src={require('../../public/img/vivaro.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="https://www.synisys.com/">
                                <img src={require('../../public/img/synergy.png')} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row sponsors-row">
                        <h4>Partners</h4>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="http://www.mediainitiatives.am/">
                                <img src={require('../../public/img/mediacenter.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="http://aua.am/">
                                <img src={require('../../public/img/aua.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="http://hexdivision.com">
                                <img src={require('../../public/img/hex.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="https://www.simplytechnologies.net/">
                                <img src={require('../../public/img/simply.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    </div>
                    <div className="row sponsors-row">
                        <h4>Information sponsors</h4>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="http://www.itel.am/am">
                                <img src={require('../../public/img/itel.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="http://hetq.am/">
                                <img src={require('../../public/img/hetq.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="https://news.am/arm/">
                                <img src={require('../../public/img/newsam.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="single-sponsors">
                                <a target="_blank" href="http://pan.am/photo/">
                                <img src={require('../../public/img/pan.png')} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Content