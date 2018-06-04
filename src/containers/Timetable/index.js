import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './timetable.less';
import { Row, Col } from "antd";
import Table from './table.js';
import moment from 'moment';
import actions from '../../redux/schedule/actions';

const { getSchedule } = actions;

class Timetable extends Component {
    timeline = {
        bigHall: {},
        '214W': {},
        '208E': {},
        '308E': {},
        '213W': {},
        '113W': {},
        '114W': {},
    }

    componentWillMount() {
        this.props.getSchedule();
    }

    static buildTimeline(schedule) {
        const timeline = {};

        for(let i = 0; i < schedule.items.length; i++) {
            const event = schedule.items[i];

            timeline[moment(event.time_from.date).format('DD')] =
                timeline[moment(event.time_from.date).format('DD')] ?
                    timeline[moment(event.time_from.date).format('DD')] :
                    {};
            timeline[moment(event.time_from.date).format('DD')][moment(event.time_from.date).format('HH')] =
                timeline[moment(event.time_from.date).format('DD')][moment(event.time_from.date).format('HH')] ?
                    timeline[moment(event.time_from.date).format('DD')][moment(event.time_from.date).format('HH')] :
                    {};
            timeline[moment(event.time_from.date).format('DD')][moment(event.time_from.date).format('HH')][event.room] = event;
        }

        return timeline;
    }

    render() {
        this.timeline = Timetable.buildTimeline(this.props.schedule);


        console.log(this.timeline);

        return (
            <div className="timetable-wrapper">
                <Row className='timetable-header' type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} xl={10}>
                        <h2 className="page-header-text"><IntlMessages id="timetable.header" /></h2>
                    </Col>
                    <Col xs={24} sm={12} xl={8} className="timetable-filter">
                        <p><IntlMessages id="timetable.days" /></p>
                        <div className="timetable-days">
                            <a className="active">27</a>
                            <a>28</a>
                        </div>
                        <p className="timetable-times">10:00 - 17:00</p>
                    </Col>
                    <Col xs={24} sm={11} xl={4} className="timetable-type">
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

export default connect(
    state => ({
        schedule: state.Schedule.toJS(),
    }),
    { getSchedule }
)(Timetable);
