import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './sponsors.less';
import { Row, Col } from "antd";
import Sponsor from '../../components/Sponsor';
import logo from '../../image/ucom.png'

class Sponsors extends Component {
    render() {
        return (
            <div className="sponsors-wrapper">
                <Row className='sponsors-header' type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} xl={10}>
                        <h2 className="page-header-text"><IntlMessages id="sponsors.header" /></h2>
                    </Col>
                    <Col xl={14} />
                </Row>
                <Sponsor.Title>General</Sponsor.Title>
                <Row className='sponsors-body' type="flex" align="middle">
                    <Col xs={24} xl={4}>
                      <Sponsor.Sponsor logo={logo} name="UCOM"/>
                    </Col>
                </Row>
                <Sponsor.Title>Sponsors</Sponsor.Title>
                <Row className='sponsors-body' type="flex" align="middle">
                    <Col xs={24} xl={4}>
                      <Sponsor.Sponsor logo={logo} name="UCOM"/>
                    </Col>
                    <Col xs={24} xl={4}>
                      <Sponsor.Sponsor logo={logo} name="UCOM"/>
                    </Col>
                    <Col xs={24} xl={4}>
                      <Sponsor.Sponsor logo={logo} name="UCOM"/>
                    </Col>
                    <Col xs={24} xl={4}>
                      <Sponsor.Sponsor logo={logo} name="UCOM"/>
                    </Col>
                    <Col xs={24} xl={4}>
                      <Sponsor.Sponsor logo={logo} name="UCOM"/>
                    </Col>
                    <Col xs={24} xl={4}>
                      <Sponsor.Sponsor logo={logo} name="UCOM"/>
                    </Col>
                </Row>
                <Sponsor.Title>Partners</Sponsor.Title>
                <Row className='sponsors-body' type="flex" align="middle">
                  <Col xs={24} xl={4}>
                    <Sponsor.Sponsor logo={logo} name="UCOM"/>
                  </Col>
                  <Col xs={24} xl={4}>
                    <Sponsor.Sponsor logo={logo} name="UCOM"/>
                  </Col>
                </Row>
                <Sponsor.Title>Information Sponsors</Sponsor.Title>
                <Row className='sponsors-body' type="flex" align="middle">
                  <Col xs={24} xl={4}>
                    <Sponsor.Sponsor logo={logo} name="UCOM"/>
                  </Col>
                  <Col xs={24} xl={4}>
                    <Sponsor.Sponsor logo={logo} name="UCOM"/>
                  </Col>
                  <Col xs={24} xl={4}>
                    <Sponsor.Sponsor logo={logo} name="UCOM"/>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(Sponsors);
