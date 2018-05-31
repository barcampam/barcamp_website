import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './timetable.less';
import { Row, Col } from "antd";
import Table from './table.js';

class Timetable extends Component {
    render() {
        return (
            <div className="timetable-wrapper">
                <Row className='timetable-header' type="flex" justify="space-around" align="middle">
                    <Col span={6}>
                        <h2 className="page-header-text"><IntlMessages id="timetable.header" /></h2>
                    </Col>
                    <Col span={5} className="timetable-filter">
                        <p><IntlMessages id="timetable.days" /></p>
                        <div className="timetable-days">
                            <a className="active">27</a>
                            <a>28</a>
                        </div>
                        <p className="timetable-times">10:00 - 17:00</p>
                    </Col>
                    <Col span={5} className="timetable-type">
                        <div className="timetable-speak">
                            <span className="timetable-first-circle" />
                            <p>Speak</p>
                        </div>
                        <div className="timetable-workshop">
                            <span className="timetable-second-circle" />
                            <p>Workshop</p>
                        </div>
                    </Col>
                </Row>
                <Row className='timetable-header' type="flex" justify="space-around" align="middle">
                    <Table />
                </Row>
            </div>
        );
    }
}

export default connect()(Timetable);