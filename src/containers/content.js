import React, {Component} from "react"

import Timetable from './timetable'

class Content extends Component{
    render(){
        return(
            <div>
                <section className="home-top">
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
                <Timetable />
            </div>
        )
    }
}


export default Content