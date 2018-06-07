import React, {Component} from 'react';
import IntlMessages from '../../../components/utility/intlMessages';
import { Row, Col, Timeline, Modal } from 'antd';
import "./archive.less";
import archiveLogo from '../../../image/archive-logo.png';
import LiveStream from '../../Livestream/index.js';
import {connect} from "react-redux";
import actions from '../../../redux/gallary/actions';
import Gallery from '../../../components/Gallery';

const { getGallary } = actions;

class Archive extends Component {
    state = {
        visible: false,
        active: 2016,
        years: [2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
        content: {
            2010: <div>No Content</div>,
            2011: <div>No Content</div>,
            2012: <div>No Content</div>,
            2013: <div>No Content</div>,
            2014: <div>No Content</div>,
            2015: <div>No Content</div>,
            2016: <div>
                <p className="archive-text"><IntlMessages id="archive.text1" /></p>
                <br />
                <p className="archive-text"><IntlMessages id="archive.text2" /></p>
                <br />
                <p className="archive-text"><IntlMessages id="archive.text3" /></p>
                <br />
                <p className="archive-text"><IntlMessages id="archive.text4" /></p>
                <br />
            </div>,
            2017: <div>
                <p className="archive-text"><IntlMessages id="archive.text1" /></p>
                <br />
                <p className="archive-text"><IntlMessages id="archive.text2" /></p>
                <br />
                <p className="archive-text"><IntlMessages id="archive.text5" /></p>
                <br />
                <p className="archive-text"><IntlMessages id="archive.text6" /></p>
                <br />
            </div>
        }
    };

    componentWillMount() {
        this.props.getGallary();
    }

    openModal(photo) {
        this.setState({visible: true, photo: photo});
    }

    handleCancel() {
        this.setState({visible: false});
    }

    buildSet() {
        return this.props.gallary.items.length > 0 ? this.props.gallary.items.map((item, index) => (
            <Col xs={24} sm={12} xl={6} key={index}>
                <Gallery photo={item.photo} onClick={this.openModal.bind(this, item.photo)} />
            </Col>)) : null;
    }

    render() {
        return (
            <div className="archive-wrapper">
               <h1 className="page-header-text"><IntlMessages id="navigation.archive" /></h1>

                <Row className="timeline-row">
                    <div className="archive-timeline-wrapper">
                        <Col xl={4} lg={4} md={4} sm={2} xs={1}>
                            <div className="timeline-wrapper">
                                <Timeline>
                                    {this.state.years.map((item, index) => {
                                        return <Timeline.Item
                                            key={index}
                                            className={`timeline-item ${this.state.active === item ? 'active' : null}`}
                                            onClick={() => this.setState({active: item})}>
                                            <a>{item}</a>
                                        </Timeline.Item>
                                    })}
                                </Timeline>
                            </div>
                        </Col>
                       

                        <Col xl={18} lg={18} md={20} sm={22} xs={23}>
                            <div className="archieve-logo-header-wrapper">
                                <img src={archiveLogo} alt="Logo" />
                                <h1>BarCamp Yerevan</h1>
                            </div>
                            <div className="archive-text-wrapper">
                                {this.state.content[this.state.active]}
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
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <h1 className="page-header-text event-photos"><IntlMessages id="archive.eventPhotos" /></h1>
                                </Col>
                    {this.buildSet()}
                </Row>
                <Modal
                    className="archive-modal"
                    visible={this.state.visible}
                    onCancel={this.handleCancel.bind(this)}
                    footer={null}
                    width="70vw"
                >
                    <img className="archive-modal-img" src={this.state.photo} alt="Gallery"/>
                </Modal>
            </div>
        );
    }
}

export default connect(
    state => ({
        gallary: state.Gallary.toJS()
    }),
    { getGallary }
)(Archive)