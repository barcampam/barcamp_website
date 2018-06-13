import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './special-speakers.less';
import { Row, Col } from "antd";
import Speaker from '../../components/Speaker';

class SpecialSpeakers extends Component {
    render() {
        const lang = this.props.lang.language.locale;

        return (
            <div className="special-speakers-wrapper">
                <Row className='special-speakers-header' type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} xl={10}>
                        <h2 className="page-header-text"><IntlMessages id="special_speakers.header" /></h2>
                    </Col>
                    <Col xl={14} />
                </Row>
                <Row className='special-speakers-body' type="flex" justify="space-between" align="middle">
                    {this.props.speakers.map((item, index) => (
                        <Col xs={24} sm={12} xl={6} key={index} className="speaker-col">
                            <Speaker avatar={item.photo} position={item[lang].bio} name={item[lang].name ? item[lang].name : item['en'].name } title={item[lang].topic} socialNetworks={item['socialnetworks']} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({
        lang: state.LanguageSwitcher.toJS()
    }), {})(SpecialSpeakers);
