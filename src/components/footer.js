import React, {Component} from "react"



class Footer extends Component{


    render(){
        return(
            <div className="footer">
                <div className="container-fluid footer-navigation">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <img src={require('../../public/img/logo.png')} />
                            <ul>
                                <li><a href="/about">ABOUT</a></li>
                                <li><a href="/archive">ARCHIVE</a></li>
                                <li><a href="/faq">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    </div>
                </div>
                <div className="container-fluid footer-bottom-bar">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footer-social-links">
                            <a href=""><img src={require('../../public/img/hover_fb.png')} /></a>
                            <a href=""><img src={require('../../public/img/hover_twitter.png')} /></a>
                            <a href=""><img src={require('../../public/img/hover_instagram.png')} /></a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 barcamp-address">
                            <h3>GET IN TOUCH WITH US</h3>
                            <p>40 Marshal Baghramyan Ave, Yerevan 0019<br />
                                barista@barcamp.com
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-5"></div>
                    </div>
                </div>
                <div className="map-wrapper hidden-xs">
                    <div  id="map"></div>
                </div>
            </div>
        )
    }
}

export default Footer