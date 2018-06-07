import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './sponsors.less';
import { Row, Col } from "antd";
import Sponsor from '../../components/Sponsor';
import ucomLogo from '../../image/ucom.png';
import workfrontLogo from '../../image/workfront.png';
import sflLogo from '../../image/sfl.png';
import betconstructLogo from '../../image/betconstruct.png';
import synergyLogo from '../../image/synergy.png';
import picsartLogo from '../../image/picsart.png';
import simplyLogo from '../../image/simply.png';
import mediaLogo from '../../image/mediaInitiative.png';
import auaLogo from '../../image/aua.png';
import startuparmeniaLogo from '../../image/startuparmenia.png';
import ipmarketingLogo from '../../image/ipmarketing.png';
import mediamaxLogo from '../../image/mediamax.png';

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
                      <Sponsor.Sponsor logo={ucomLogo} name="UCOM"/>
                    </Col>
                </Row>
                <Sponsor.Title>Sponsors</Sponsor.Title>
                <Row className='sponsors-body' type="flex" align="middle">
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={betconstructLogo} name="BetConstruct"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={picsartLogo} name="PicsArt"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={sflLogo} name="SFL"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={simplyLogo} name="Simply Technologies"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={synergyLogo} name="Synergy"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={workfrontLogo} name="workfront"/>
                    </Col>
                </Row>
                <Sponsor.Title>Partners</Sponsor.Title>
                <Row className='sponsors-body' type="flex" align="middle">
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={auaLogo} name="American University of Armenia"/>
                  </Col>
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={mediaLogo} name="Media Initiatives Center"/>
                  </Col>
                </Row>
                <Sponsor.Title>Information Sponsors</Sponsor.Title>
                <Row className='sponsors-body' type="flex" align="middle">
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={ipmarketingLogo} name="ip marketing"/>
                  </Col>
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={mediamaxLogo} name="media max"/>
                  </Col>
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={startuparmeniaLogo} name="StartUp Armenia"/>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default connect()(Sponsors);
