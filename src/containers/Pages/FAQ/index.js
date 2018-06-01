import React, {Component} from 'react';
import "./faq.less";
import { Row, Col, Input, Button } from 'antd';
import IntlMessages from '../../../components/utility/intlMessages';

const { TextArea } = Input;

export default class Index extends Component {
    render() {
        return (
            <div className='faq-wrapper'>
                <h1 className="page-header-text"><IntlMessages id="navigation.faq" /></h1>
                
                <Row>
                    <Col xl={16} lg={14} md={12} sm={12} xs={24}>
                        <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.recievedLetter" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.recievedLetterAnswer" /></p>
                       </div>

                       <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.shouldRegister" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.shouldRegisterAnswer" /></p>
                       </div>

                       <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.timetable" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.timetableAnswer" /></p>
                       </div>

                       <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.oneDay" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.oneDayAnswer" /></p>
                       </div>

                       <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.badges" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.badgesAnswer" /></p>
                       </div>

                       <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.present" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.presentAnswer" /></p>
                       </div>

                       <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.organizer" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.organizerAnswer" /></p>
                       </div>

                       <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.online" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.onlineAnswer" /></p>
                       </div>

                       <div className="faq-questions-wrapper">
                            <h3 className="faq-header-texts"><IntlMessages id="faq.formats" /></h3>
                            <p className="faq-question-answers"><IntlMessages id="faq.formatsAnswer" /></p>
                       </div>
                    </Col>

                    <Col xl={8} lg={10} md={12} sm={12} xs={24}>
                        <div className="question-wrapper">
                            <div className="faq-header-wrapper">
                                <h3 className="ask-a-question"><IntlMessages id="faq.askQuestion" /></h3>
                                <h5 className="faq-lorem"><IntlMessages id="faq.lorem" /></h5>
                            </div>

                            <div className="email-wrapper">
                                <h4 className="faq-form-header"><IntlMessages id="faq.email" /></h4>
                                <Input className="faq-input"/>
                            </div>

                            <div className="text-area-wrapper">
                                <h4 className="faq-form-header"><IntlMessages id="faq.question" /></h4>
                                <TextArea className="text-area-input" />
                            </div>

                            <div className="faq-button-wrapper">
                        `       <Button type="primary" className="faq-submit-button"><IntlMessages id="faq.submitButton" /></Button>
                            </div>
                        </div>

                        <div className="faq-background">
                                
                        </div>
                    </Col> 
                </Row>
            </div>
        );
    }
}