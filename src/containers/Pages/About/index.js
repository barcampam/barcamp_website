import React, {Component} from 'react';
import "./about.less";
import IntlMessages from '../../../components/utility/intlMessages';
import BarCampStaff from '../../../image/about.jpg';
import { Row, Col } from 'antd';

export default class Archive extends Component {
    render() {
        return (
            <div className="about-wrapper">
               <h1 className="page-header-text"><IntlMessages id="navigation.about" /></h1>

               <div className="about-image-wrapper">
                    <img src={BarCampStaff} alt="BarCamp Staff" />
               </div>


               <div className="about-text-wrapper">
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={0} xs={0}>

                        </Col>

                        <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                            {/* <h3 className="about-header"><IntlMessages id="about.whoWeAre" /></h3> */}

                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText1" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText2" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText3" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText4" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText5" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText6" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText7" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText8" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText9" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText10" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText11" /></p>
                            <br/>
                            <p className="about-text-content"><IntlMessages id="about.whoWeAreText12" /></p>
                            <br/>
                        </Col>

                        <Col xl={4} lg={4} md={4} sm={0} xs={0}>
                    
                        </Col>
                    </Row>
                </div>
            </div>
               
            
            
        );
    }
}