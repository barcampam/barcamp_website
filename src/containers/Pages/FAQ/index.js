import React, { Component } from 'react';
import "./faq.less";
import { Row, Col, Input, Button } from 'antd';
import IntlMessages from '../../../components/utility/intlMessages';
import actions from '../../../redux/faq/actions';
import { connect } from "react-redux";

const { TextArea } = Input;

const { faqSubmit } = actions;

class FAQ extends Component {

    constructor(props) {
        super(props);

        this.emailChange = this.emailChange.bind(this);
        this.textChange = this.textChange.bind(this);
        this.submitFaq = this.submitFaq.bind(this);

        this.state = {
            emailValue: "",
            textValue: ""
        }
    }

    emailChange(event) {
        this.setState({
            emailValue: event.target.value
        })
    }

    textChange(event) {
        this.setState({
            textValue: event.target.value
        })
    }


    submitFaq() {
        console.log(this.state.emailValue + this.state.textValue);

        this.props.faqSubmit(this.state.emailValue, this.state.textValue);
    
    }

    render() {
        return (
            <div className='faq-wrapper'>
                <h1 className="page-header-text"><IntlMessages id="navigation.faq" /></h1>
                
                <Row>
                    <Col xl={16} lg={14} md={12} sm={24} xs={24}>
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

                    <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                        <div className="question-wrapper">
                            <div className="faq-header-wrapper">
                                <h3 className="ask-a-question"><IntlMessages id="faq.askQuestion" /></h3>
                                <h5 className="faq-lorem"><IntlMessages id="faq.lorem" /></h5>
                            </div>

                            <div className="email-wrapper">
                                <h4 className="faq-form-header"><IntlMessages id="faq.email" /></h4>
                                <Input onChange={this.emailChange} className="faq-input"/>
                            </div>

                            <div className="text-area-wrapper">
                                <h4 className="faq-form-header"><IntlMessages id="faq.question" /></h4>
                                <TextArea onChange={this.textChange} className="text-area-input" />
                            </div>

                            <div className="faq-button-wrapper">
                        `       <Button onClick={this.submitFaq} type="primary" className="faq-submit-button">
                                    <IntlMessages id="faq.submitButton" />
                                </Button>
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

export default connect(
    state => ({
        faq: state.Faq.toJS(),
    }),
    { faqSubmit }
)(FAQ);