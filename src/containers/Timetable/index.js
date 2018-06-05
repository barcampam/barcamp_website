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

    state = {
        active: 27
    };

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

        return (
            <div className="timetable-wrapper">
                <Row className='timetable-header' type="flex" justify="space-around" align="middle">
                    <Col xs={24} sm={24} xl={12}>
                        <h2 className="page-header-text"><IntlMessages id="timetable.header" /></h2>
                    </Col>
                    <Col xs={24} sm={24} xl={11} className="timetable-filter">
                        <p><IntlMessages id="timetable.days" /></p>
                        <div className="timetable-days">
                            <a onClick={() => (
                                this.setState({active: 27})
                            )} className={this.state.active === 27 ? 'active' : ''}>27</a>
                            <a onClick={() => (
                                this.setState({active: 28})
                            )} className={this.state.active === 28 ? 'active' : ''}>28</a>
                        </div>
                        <p className="timetable-times">10:00 - 17:00</p>
                    </Col>
                    {/*<Col xs={24} sm={11} xl={4} className="timetable-type">*/}
                        {/*<div className="timetable-speak">*/}
                        {/*<span className="timetable-first-circle" />*/}
                        {/*<p>Speak</p>*/}
                        {/*</div>*/}
                        {/*<div className="timetable-workshop">*/}
                        {/*<span className="timetable-second-circle" />*/}
                        {/*<p>Workshop</p>*/}
                        {/*</div>*/}
                    {/*</Col>*/}
                </Row>
                <Row className='timetable-header' type="flex" justify="space-around" align="middle">
                    <Table data={this.timeline} loading={this.props.schedule.loading} day={this.state.active} lang={this.props.lang} />
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({
        schedule: state.Schedule.toJS(),
        lang: state.LanguageSwitcher.toJS()
    }),
    { getSchedule }
)(Timetable);
