import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './special-speakers.less';
import { Row, Col } from "antd";
import Speaker from '../../components/Speaker';
import avatar from '../../image/avatar.png'

class SpecialSpeakers extends Component {
    render() {
        return (
            <div className="special-speakers-wrapper">
                <Row className='special-speakers-header' type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} xl={10}>
                        <h2 className="page-header-text"><IntlMessages id="special_speakers.header" /></h2>
                    </Col>
                    <Col xl={14} />
                </Row>
                <Row className='special-speakers-body' type="flex" justify="space-around" align="middle">
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

export default connect()(SpecialSpeakers);
