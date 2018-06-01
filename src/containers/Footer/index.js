import React, {Component} from 'react';
import { Row, Col, Layout, } from "antd";
import { NavLink } from 'react-router-dom'
import facebookLogo from '../../image/facebook.png';
import twitterLogo from '../../image/twitter.png';
import instagramLogo from '../../image/instagram.png';
import logo from '../../image/logo.png';
import './footer.less';
import IntlMessages from '../../components/utility/intlMessages';
// import GoogleMapReact from 'google-map-react';

const { Footer } = Layout;
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class extends Component {
    // static defaultProps = {
    //     center: {
    //       lat: 59.95,
    //       lng: 30.33
    //     },
    //     zoom: 11
    //   };

    render() {
        return (
            <Footer>
                <Row style={{display: 'flex', margin: '0 3%'}}>
                    <Col xl={14} lg={16} md={12} sm={12} xs={24}>
                        <Row className="footer-row first-row">
                            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                                <div className="logo-wrapper">
                                    <NavLink to="/" style={{display: "flex"}}>
                                        <img src={logo} alt="BarCamp Logo" height="60px"/>
                                    </NavLink>
                                </div>
                            </Col>

                            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                                <div className="footer-nav-wrapper">
                                    <nav>
                                        <ul style={{fontSize: "15px",
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            <NavLink to="/archive" key="1">
                                                <IntlMessages id="navigation.about"/>
                                            </NavLink>
                                            <NavLink to="/livestream" key="2">
                                                <IntlMessages id="navigation.archive"/>
                                            </NavLink>
                                            <NavLink to="/faq" key="3">
                                                <IntlMessages id="navigation.faq" />
                                            </NavLink>
                                        </ul>
                                    </nav>
                                </div>
                            </Col>
                        </Row>


                        <Row className="footer-row">
                            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                                <div className="social-network-wrapper">
                                    <a href="https://www.facebook.com/barcampevn/" target="_blank" rel="noopener noreferrer">
                                        <div className="social-network-cirlce">
                                            <img src={facebookLogo} alt="Facebook"/>
                                        </div>
                                    </a>

                                    <a href="https://twitter.com/barcampam" target="_blank" rel="noopener noreferrer">
                                        <div className="social-network-cirlce">
                                            <img src={twitterLogo} alt="Twitter"/>
                                        </div>
                                    </a>

                                    <a href="https://www.instagram.com/barcamp_yerevan/" target="_blank" rel="noopener noreferrer">
                                        <div className="social-network-cirlce">
                                            <img src={instagramLogo} alt="Instagram"/>
                                        </div>
                                    </a>
                                </div>
                            </Col>

                            <Col xl={12} lg={12} md={24} sm={24} xs={24} className="get-in-touch-wrapper">
                                <p className="get-in-touch"><IntlMessages id="footer.getInTouch" /></p>
                                <p><IntlMessages id="footer.address" /></p>
                                <p>barista@barcamp.com</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={10} lg={8} md={12} sm={12} xs={24} className="map-column">
                        <div className="map-wrapper">
                            {/* <GoogleMapReact
                                bootstrapURLKeys={{ 
                                    key: "AIzaSyD0y_sPhpsKmWXWeQra31QbqIkQ-e9A8bw",
                                    language: 'en'
                                }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text={'Kreyser Avrora'}
                                    />
                            </GoogleMapReact> */}
                        </div>
                    </Col>
                </Row>
            </Footer>
        );
    }
}