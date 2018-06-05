import React, {Component} from 'react';
import IntlMessages from '../../../components/utility/intlMessages';
import { Row, Col, Timeline } from 'antd';
import "./archive.less";
import archiveLogo from '../../../image/archive-logo.png';
import LiveStream from '../../Livestream/index.js';

export default class Archive extends Component {
    // constructor(props) {
    //     super(props);
    //     this.addActiveClass= this.addActiveClass.bind(this);
    //     this.state = {
    //         active: false,
    //     };
    // }

    // toggleClass() {
    //     const currentState = this.state.active;
    //     this.setState({ active: !currentState });
    // };

    render() {
        return (
            <div className="archive-wrapper">
               <h1 className="page-header-text"><IntlMessages id="navigation.archive" /></h1>

                <Row className="timeline-row">
                    <div className="archive-timeline-wrapper">
                        <Col xl={4} lg={4} md={4} sm={2} xs={1}>
                            <div className="timeline-wrapper">
                                <Timeline>
                                    <Timeline.Item className="timeline-item">
                                        <a>2017</a>
                                    </Timeline.Item>

                                    <Timeline.Item className="timeline-item">
                                        <a>2016</a>
                                    </Timeline.Item>

                                    <Timeline.Item className="timeline-item">
                                        <a>2015</a>
                                    </Timeline.Item>

                                    <Timeline.Item className="timeline-item">
                                        <a>2014</a>
                                    </Timeline.Item>

                                    <Timeline.Item className="timeline-item">
                                        <a>2013</a>
                                    </Timeline.Item>

                                    <Timeline.Item className="timeline-item">
                                        <a>2012</a>
                                    </Timeline.Item>

                                    <Timeline.Item className="timeline-item">
                                        <a>2011</a>
                                    </Timeline.Item>

                                    <Timeline.Item className="timeline-item">
                                        <a>2010</a>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                        </Col>
                       

                        <Col xl={18} lg={18} md={20} sm={22} xs={23}>
                            <div className="archieve-logo-header-wrapper">
                                <img src={archiveLogo} alt="Logo" />
                                <h1>BarCamp Yerevan</h1>
                            </div>
                            <div className="archive-text-wrapper">
                                <p className="archive-text"><IntlMessages id="archive.text1" /></p>
                                <br />
                                <p className="archive-text"><IntlMessages id="archive.text2" /></p>
                                <br />
                                <p className="archive-text"><IntlMessages id="archive.text3" /></p>
                                <br />
                                <p className="archive-text"><IntlMessages id="archive.text4" /></p>
                                <br />
                            </div>
                        </Col>
                    </div>
                </Row>

                <Row>
                    <Col xl={10} lg={10} md={10} sm={24} xs={24}>
                        <div className="videos-header-wrapper">
                            <h1><IntlMessages id="archive.videos" /></h1>
                        </div>
                    </Col>
                </Row>

                <LiveStream />

                <Row>
                    <h1 className="page-header-text event-photos"><IntlMessages id="archive.eventPhotos" /></h1>
                </Row>
            </div>
        );
    }
}