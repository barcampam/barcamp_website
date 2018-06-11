import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './sponsors.less';
import { Row, Col } from "antd";
import Sponsor from '../../components/Sponsor';
import ucomLogo from '../../image/ucom.png';
import workfrontLogo from '../../image/workfront.png';
import rockbiteLogo from '../../image/rockbite.png';
import avetiqLogo from '../../image/avetiq.png';
import ginosiLogo from '../../image/ginosi.png';
import sflLogo from '../../image/sfl.png';
import vinetiLogo from '../../image/vineti.png';
import WEBLogo from '../../image/10WEB.png';
import synergyLogo from '../../image/synergy.png';
import wfaLogo from '../../image/wfa.png';
import betconstructLogo from '../../image/betconstruct.png';
import digitainLogo from '../../image/digitain_logo_new.png';
import simplyLogo from '../../image/simply.png';
import mediaLogo from '../../image/mediaInitiative.png';
import auaLogo from '../../image/aua.png';
import istcLogo from '../../image/ISTC.png';
import SmartGateLogo from '../../image/SmartGateVC.png';
// import startuparmeniaLogo from '../../image/startuparmenia.png';
// import ipmarketingLogo from '../../image/ipmarketing.png';
// import mediamaxLogo from '../../image/mediamax.png';

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
                      <Sponsor.Sponsor logo={digitainLogo} name="Digitain"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={rockbiteLogo} name="RocketBite"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={workfrontLogo} name="Workfront"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={avetiqLogo} name="Avetiq"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={ginosiLogo} name="Ginosi Apartels"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={sflLogo} name="SFL"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={vinetiLogo} name="Vineti"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={WEBLogo} name="10WEB"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={synergyLogo} name="Synergy"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={simplyLogo} name="Simply Technologies"/>
                    </Col>
                    <Col xs={24} sm={12} xl={4}>
                      <Sponsor.Sponsor logo={wfaLogo} name="WEBB Fontaine"/>
                    </Col>
                </Row>
                <Sponsor.Title>Partners</Sponsor.Title>
                <Row className='sponsors-body' type="flex" align="middle">
                <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={auaLogo} name="American University of Armenia"/>
                  </Col>
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={istcLogo} name="ISTC Foundation"/>
                  </Col>
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={mediaLogo} name="Media Initiatives Center"/>
                  </Col>
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={SmartGateLogo} name="Smart Gate VC"/>
                  </Col>
                </Row>
                {/* <Sponsor.Title>Information Sponsors</Sponsor.Title> */}
                <Row className='sponsors-body' type="flex" align="middle">
                  {/* <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={ipmarketingLogo} name="ip marketing"/>
                  </Col>
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={mediamaxLogo} name="media max"/>
                  </Col>
                  <Col xs={24} sm={12} xl={4}>
                    <Sponsor.Sponsor logo={startuparmeniaLogo} name="StartUp Armenia"/>
                  </Col> */}
                </Row>
            </div>
        );
    }
}

export default connect()(Sponsors);
