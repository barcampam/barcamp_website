import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './speakers.less';
import { Row, Col } from "antd";
import Speaker from '../../components/Speaker';
import avatar from '../../image/avatar.png'

class Speakers extends Component {
    render() {
        return (
            <div className="speakers-wrapper">
                <Row className='speakers-header' type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} xl={10} className="speakers-heading-wrapper">
                        <h2 className="page-header-text"><IntlMessages id="speakers.header" /></h2>
                        <a className="speakers-all">See All (32)</a>
                    </Col>
                    <Col xl={14} />
                </Row>
                <Row className='speakers-body' type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={12} xl={6}>
                      <Speaker avatar={avatar} position="AIESEC" name="Owen Bailey" title="What Is Hdcp"/>
                    </Col>
                    <Col xs={24} sm={12} xl={6}>
                      <Speaker avatar={avatar} position="AIESEC" name="Owen Bailey" title="What Is Hdcp"/>
                    </Col>
                    <Col xs={24} sm={12} xl={6}>
                      <Speaker avatar={avatar} position="AIESEC" name="Owen Bailey" title="What Is Hdcp"/>
                    </Col>
                    <Col xs={24} sm={12} xl={6}>
                      <Speaker avatar={avatar} position="AIESEC" name="Owen Bailey" title="What Is Hdcp"/>
                    </Col>
                    <Col xs={24} sm={12} xl={6}>
                      <Speaker avatar={avatar} position="AIESEC" name="Owen Bailey" title="What Is Hdcp"/>
                    </Col>
                    <Col xs={24} sm={12} xl={6}>
                      <Speaker avatar={avatar} position="AIESEC" name="Owen Bailey" title="What Is Hdcp"/>
                    </Col>
                    <Col xs={24} sm={12} xl={6}>
                      <Speaker avatar={avatar} position="AIESEC" name="Owen Bailey" title="What Is Hdcp"/>
                    </Col>
                    <Col xs={24} sm={12} xl={6}>
                      <Speaker avatar={avatar} position="AIESEC" name="Owen Bailey" title="What Is Hdcp"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(Speakers);
