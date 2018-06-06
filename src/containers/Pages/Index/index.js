import React, {Component} from 'react';
import { Layout, Button, Icon } from 'antd';
import img from '../../../image/6-layers.png';
// import andriod from '../../../image/bitmap.png';
import './index.less';
import Timetable from '../../Timetable';
import SpecialSpeakers from '../../SpecialSpeakers';
import Speakers from '../../Speakers';
import Sponsors from '../../Sponsors';
import {connect} from "react-redux";
import IntlMessages from '../../../components/utility/intlMessages';


class Index extends Component {
    render() {
        return (
            <div>
                <Layout className={`bar-index ${this.props.app.view !== 'DesktopView' ? 'mobile' : null}`}>
                    <div className="bar-text-wrapper">
                        <h3 className="bar-date">Jun 16-17</h3>
                        <h1 className="bar-text">The most wanted <b>tech and<br /> media event</b> in Armenia</h1>
                        <a href="https://www.eventbrite.co.uk/e/barcamp-yerevan-2018-tickets-46342571880" target="_blank" rel="noopener noreferrer">
                            <Button className="register-button"><IntlMessages id="landing.register" /></Button>
                        </a>

                        <div className="social-network-block">
                            <a href="https://www.facebook.com/barcampevn/" target="_blank" rel="noopener noreferrer">
                                <Icon type="facebook" className="landing-social-icons"/>
                            </a>

                            <a href="https://twitter.com/barcampam" target="_blank" rel="noopener noreferrer">
                                <Icon type="twitter" className="landing-social-icons"/>
                            </a>

                            <a href="https://www.instagram.com/barcamp_yerevan/" target="_blank" rel="noopener noreferrer">
                                <Icon type="instagram" className="landing-social-icons"/>
                            </a>
                        </div>
                    </div>

                   
                    
                    <div className="bar-bootom-images">
                        <p className="bar-hashtag">#barcampevn18</p>
                        {/*<a href="https://play.google.com/store/apps/details?id=com.barcampevn" target="_blank">*/}
                            {/*<img src={andriod} alt="BarCamp EVN'18 Andriod Application"/>*/}
                        {/*</a>*/}
                    </div>
                    <img className="bar-main-img" src={img} alt="BarCamp EVN'18 Cover" />
                </Layout>
                <div className="bar-head-separator" />
                <Layout className="bar-timetable bar-index-layout">
                    <Timetable />
                </Layout>
                <Layout className="bar-special-speakers bar-index-layout">
                    <SpecialSpeakers />
                </Layout>
                <Layout className="bar-speakers bar-index-layout">
                    <Speakers />
                </Layout>
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
        app: state.App.toJS()
    }),
    {}
)(Index);
