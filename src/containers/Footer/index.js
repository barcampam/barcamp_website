import React, {Component} from 'react';
import { Row, Col, Layout, } from "antd";
import { NavLink } from 'react-router-dom'
import facebookLogo from '../../image/facebook.png';
import twitterLogo from '../../image/twitter.png';
import instagramLogo from '../../image/instagram.png';
import logo from '../../image/logo.png';
import './footer.less';
import IntlMessages from '../../components/utility/intlMessages';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const { Footer } = Layout;

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `240px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 40.193456, lng: 44.503604 }}
    >
      {props.isMarkerShown && <Marker position={{ lat:40.193456, lng: 44.503604 }} />}
    </GoogleMap>
  );

export default class extends Component {
    render() {
        return (
            <Footer>
                <Row style={{display: 'flex', margin: '0 3%'}}>
                    <Col xl={14} lg={16} md={12} sm={24} xs={24}>
                        <Row className="footer-row first-row">
                            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                                <div className="logo-wrapper">
                                    <NavLink to="/" style={{display: "flex"}}>
                                        <img src={logo} alt="BarCamp Logo" height="60px" className="footer-logo"/>
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


                        <Row className="footer-row second-row">
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
                            <MyMapComponent isMarkerShown />
                        </div>
                    </Col>
                </Row>
            </Footer>
        );
    }
}
