import React, {Component} from 'react';
import { Layout, Button } from 'antd';
import img from '../../../image/6-layers.png';
import andriod from '../../../image/bitmap.png';
import './index.less';
import Timetable from '../../Timetable';
import SpecialSpeakers from '../../SpecialSpeakers';
import Speakers from '../../Speakers';
import Sponsors from '../../Sponsors';
import {connect} from "react-redux";
import IntlMessages from '../../../components/utility/intlMessages';
import actions from '../../../redux/speakers/actions';
import facebookLogo from '../../../image/facebook-white.png';
import twitterLogo from '../../../image/white-twitter.png';
import instagramLogo from '../../../image/white-instagram.png';
// import Livestream from '../../Livestream/index';
import mobileImg from '../../../image/mobile-landing.jpg';
import mobileImgSecondary from '../../../image/mobile-landing-secondary.jpg';

const { getSpeakers } = actions;

class Index extends Component {
    componentWillMount() {
        this.props.getSpeakers();
    }

    getSpecialSpeakers() {
        return this.props.speakers.items.filter((item) => (
            item.is_special
        ));
    }

    getAllSpeakers() {
        return this.props.speakers.items.filter((item) => (
            !item.is_special
        ))
    }

    render() {
        return (
            <div>
                <Layout className={`bar-index ${this.props.app.view !== 'DesktopView' ? 'mobile' : null}`}>
                    <div className="bar-text-wrapper">
                        <h3 className="bar-date">Jun 16-17</h3>
                        <h1 className="bar-text">The most wanted <b>tech and<br className="landing-text-breaks"/> media event</b> in Armenia</h1>
                        <a href="https://www.eventbrite.co.uk/e/barcamp-yerevan-2018-tickets-46342571880" target="_blank" rel="noopener noreferrer">
                            <Button className="register-button"><IntlMessages id="landing.register" /></Button>
                        </a>

                        <div className="social-network-block">
                            <a href="https://www.facebook.com/barcampevn/" target="_blank" rel="noopener noreferrer">
                                <img src={facebookLogo} alt="Facebook"/>
                            </a>

                            <a href="https://twitter.com/barcampam" target="_blank" rel="noopener noreferrer">
                                <img src={twitterLogo} alt="Twitter"/>
                            </a>

                            <a href="https://www.instagram.com/barcamp_yerevan/" target="_blank" rel="noopener noreferrer">
                                <img src={instagramLogo} alt="Instagram"/>
                            </a>
                        </div>

                        <a className="bar-andriod-mobile" href="https://play.google.com/store/apps/details?id=com.barcampevn" target="_blank" rel="noopener noreferrer">
                            <img src={andriod} alt="BarCamp EVN'18 Andriod Application"/>
                        </a>
                    </div>

                   
                    
                    <div className="bar-bootom-images">
                        <p className="bar-hashtag">#barcampevn18</p>
                        <a href="https://play.google.com/store/apps/details?id=com.barcampevn" target="_blank" rel="noopener noreferrer">
                            <img src={andriod} alt="BarCamp EVN'18 Andriod Application"/>
                        </a>
                    </div>
                    <img className="bar-main-img" src={img} alt="BarCamp EVN'18 Cover" />
                    <img className="bar-main-img-mobile" src={mobileImg} alt="BarCamp EVN'18 Cover" />
                    <img className="bar-secondary-img-mobile" src={mobileImgSecondary} alt="BarCamp EVN'18 Cover" />
                </Layout>
                <div className="bar-head-separator" />
                <Layout className="bar-timetable bar-index-layout">
                    <Timetable />
                </Layout>
                <Layout className="bar-special-speakers bar-index-layout">
                    <SpecialSpeakers speakers={this.getSpecialSpeakers()} />
                </Layout>
                <Layout className="bar-speakers bar-index-layout">
                    <Speakers speakers={this.getAllSpeakers()} />
                </Layout>

                {/* <div id="livestream" className="index-livestream-wrapper">
                    <Row>
                        <Col xl={10} lg={10} md={24} sm={24} xs={24}>
                            <div className="index-livestream-header-wrapper">
                                <h1>Livestream</h1>
                            </div>
                        </Col>
                    </Row>

                    <Livestream />
                </div> */}

                <Layout className="bar-speakers bar-dev-numbers" />
                <Layout className="bar-sponsors bar-index-layout">
                    <Sponsors />
                </Layout>
            </div>
        );
    }
}

export default connect(
    state => ({
        app: state.App.toJS(),
        speakers: state.Speakers.toJS()
    }),
    { getSpeakers }
)(Index);
