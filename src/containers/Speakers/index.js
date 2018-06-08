import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './speakers.less';
import { Row, Col } from "antd";
import Speaker from '../../components/Speaker';

class Speakers extends Component {
    state = {
        all: false
    };

    render() {
        const lang = this.props.lang.language.locale;
        const speakers = this.state.all ?
            this.props.speakers :
            this.props.speakers.slice(0, 8);

        return (
            <div className="speakers-wrapper">
                <Row className='speakers-header' type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} xl={10} className="speakers-heading-wrapper">
                        <h2 className="page-header-text"><IntlMessages id="speakers.header" /></h2>
                        <a className="speakers-all" onClick={() => this.setState({all: !this.state.all})}>{this.state.all ? "Hide" : `See All (${this.props.speakers.length})`}</a>
                    </Col>
                    <Col xl={14} />
                </Row>
                <Row className='speakers-body' type="flex" justify="space-between" align="middle">
                    {speakers.map((item, index) => (
                        <Col xs={24} sm={12} xl={6} key={index}>
                            <Speaker avatar={item.photo} position={item[lang].bio} name={item[lang].name} title={item[lang].topic} />
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
    }), {})(Speakers);
