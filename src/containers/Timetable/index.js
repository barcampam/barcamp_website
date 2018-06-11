import React, {Component} from 'react';
import {connect} from "react-redux";
import IntlMessages from '../../components/utility/intlMessages';
import './timetable.less';
import { Row, Col, Collapse, Tooltip } from "antd";
import Table from './table.js';
import moment from 'moment';
import actions from '../../redux/schedule/actions';

const Panel = Collapse.Panel;
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
            timeline[moment(event.time_from.date).format('DD')][moment(event.time_from.date).format('HH')][event.room] =
                timeline[moment(event.time_from.date).format('DD')][moment(event.time_from.date).format('HH')][event.room] ?
                    (() => {
                        timeline[moment(event.time_from.date).format('DD')][moment(event.time_from.date).format('HH')][event.room].push(event);

                        return timeline[moment(event.time_from.date).format('DD')][moment(event.time_from.date).format('HH')][event.room];
                    })() :
                    [event];
        }

        return timeline;
    }

    static buildTimelineByRoom(schedule) {
        const timeline = {};

        for(let i = 0; i < schedule.items.length; i++) {
            const event = schedule.items[i];

            timeline[moment(event.time_from.date).format('DD')] =
                timeline[moment(event.time_from.date).format('DD')] ?
                    timeline[moment(event.time_from.date).format('DD')] :
                    {};
            timeline[moment(event.time_from.date).format('DD')][event.room] =
                timeline[moment(event.time_from.date).format('DD')][event.room] ?
                    timeline[moment(event.time_from.date).format('DD')][event.room] :
                    {};
            timeline[moment(event.time_from.date).format('DD')][event.room][moment(event.time_from.date).format('HH')] =
                timeline[moment(event.time_from.date).format('DD')][event.room][moment(event.time_from.date).format('HH')] ?
                    (() => {
                        timeline[moment(event.time_from.date).format('DD')][event.room][moment(event.time_from.date).format('HH')].push(event);

                        return timeline[moment(event.time_from.date).format('DD')][event.room][moment(event.time_from.date).format('HH')];
                    })() :
                    [event]
        }

        return timeline;
    }

    renderMobileEvents() {
        const timeline = Timetable.buildTimelineByRoom(this.props.schedule);
        const lang = this.props.lang.language.locale;

        console.log(timeline);

        if(Object.keys(timeline).length > 0) {
            return Object.keys(timeline[this.state.active]).map((item, index) => (
                <Col xs={24} sm={24} xl={24}>
                    <Collapse bordered={false} key={index} defaultActiveKey={['1']}>
                        <Panel header={item} key="1" className="timetable-mobile-panel" showArrow={false}>
                            {Object.keys(timeline[this.state.active][item]).map((time) => (
                                timeline[this.state.active][item][time].map((event, i) => (
                                    <Tooltip key={i} title={`${event[lang]["speaker"] || ''} | ${event[lang]["topic"] || ''}`}>
                                        <div className="timetable-event">
                                            <h4 className="timetable-event-name">{event[lang]["speaker"]}</h4>
                                            <p className="timetable-event-desc">{event[lang]["topic"]}</p>
                                            <p className="timetable-event-duration">{moment(event["time_from"]["date"]).format('HH:mm')} - {moment(event["time_to"]["date"]).format('HH:mm')}</p>
                                        </div>
                                    </Tooltip>
                                ))
                            ))}
                        </Panel>
                    </Collapse>
                </Col>
            ))
        }

        return null;
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
                            )} className={this.state.active === 27 ? 'active' : ''}>16</a>
                            <a onClick={() => (
                                this.setState({active: 28})
                            )} className={this.state.active === 28 ? 'active' : ''}>17</a>
                        </div>
                        <p className="timetable-times">10:00 - 18:00</p>
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
                    {this.props.app.view !== 'MobileView' ?
                        <Table data={this.timeline} loading={this.props.schedule.loading} day={this.state.active} lang={this.props.lang} /> :
                        this.renderMobileEvents()}
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({
        schedule: state.Schedule.toJS(),
        lang: state.LanguageSwitcher.toJS(),
        app: state.App.toJS()
    }),
    { getSchedule }
)(Timetable);
