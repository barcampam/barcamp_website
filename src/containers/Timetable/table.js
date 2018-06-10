import React from 'react';
import {Tooltip} from 'antd';
import moment from "moment/moment";

const renderEvent = (events, lang, index) => {
    const event = events[index];

    if(!!Object.keys(event).reduce((i, j) => {
        return i === null ? null : event[i][0][lang]["topic"] === event[j][0][lang]["topic"] ? i : null
    })) {
        return (
            <tr key={index}>
                <td className="time">
                    {moment(event["Big Hall"][0]["time_from"]["date"]).format('HH:mm')}
                </td>
                <td colSpan={7}>
                    <Tooltip title={event["Big Hall"][0][lang]["topic"]}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["Big Hall"][0][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["Big Hall"][0][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["Big Hall"][0]["time_from"]["date"]).format('HH:mm')} - {moment(event["Big Hall"][0]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip>
                </td>
            </tr>
        );
    }

    return (
        <tr key={index}>
            <td className="time">
                {moment(event["Big Hall"][0]["time_from"]["date"]).format('HH:00')}
            </td>
            <td className="bigHall">
                {event["Big Hall"] ?
                    event["Big Hall"].map((item, index) => (
                        <Tooltip key={index} title={`${item[lang]["speaker"] || ''} | ${item[lang]["topic"] || ''}`}>
                            <div className="timetable-event">
                                <h4 className="timetable-event-name">{item[lang]["speaker"]}</h4>
                                <p className="timetable-event-desc">{item[lang]["topic"]}</p>
                                <p className="timetable-event-duration">{moment(item["time_from"]["date"]).format('HH:mm')} - {moment(item["time_to"]["date"]).format('HH:mm')}</p>
                            </div>
                        </Tooltip>
                    )) :
                    null
                }
            </td>
            <td className="113W">
                {event["113W"] ?
                    event["113W"].map((item, index) => (
                        <Tooltip key={index} title={`${item[lang]["speaker"] || ''} | ${item[lang]["topic"] || ''}`}>
                            <div className="timetable-event">
                                <h4 className="timetable-event-name">{item[lang]["speaker"]}</h4>
                                <p className="timetable-event-desc">{item[lang]["topic"]}</p>
                                <p className="timetable-event-duration">{moment(item["time_from"]["date"]).format('HH:mm')} - {moment(item["time_to"]["date"]).format('HH:mm')}</p>
                            </div>
                        </Tooltip>
                    )):
                    null
                }
            </td>
            <td className="114W">
                {event["114W"] ?
                    event["114W"].map((item, index) => (
                        <Tooltip key={index} title={`${item[lang]["speaker"] || ''} | ${item[lang]["topic"] || ''}`}>
                            <div className="timetable-event">
                                <h4 className="timetable-event-name">{item[lang]["speaker"]}</h4>
                                <p className="timetable-event-desc">{item[lang]["topic"]}</p>
                                <p className="timetable-event-duration">{moment(item["time_from"]["date"]).format('HH:mm')} - {moment(item["time_to"]["date"]).format('HH:mm')}</p>
                            </div>
                        </Tooltip>
                    )) :
                    null
                }
            </td>
            <td className="208E">
                {event["208E"] ?
                    event["208E"].map((item, index) => (
                        <Tooltip key={index} title={`${item[lang]["speaker"] || ''} | ${item[lang]["topic"] || ''}`}>
                            <div className="timetable-event">
                                <h4 className="timetable-event-name">{item[lang]["speaker"]}</h4>
                                <p className="timetable-event-desc">{item[lang]["topic"]}</p>
                                <p className="timetable-event-duration">{moment(item["time_from"]["date"]).format('HH:mm')} - {moment(item["time_to"]["date"]).format('HH:mm')}</p>
                            </div>
                        </Tooltip>
                    )):
                    null
                }
            </td>
            <td className="213W">
                {event["213W"] ?
                    event["213W"].map((item, index) => (
                        <Tooltip key={index} title={`${item[lang]["speaker"] || ''} | ${item[lang]["topic"] || ''}`}>
                            <div className="timetable-event">
                                <h4 className="timetable-event-name">{item[lang]["speaker"]}</h4>
                                <p className="timetable-event-desc">{item[lang]["topic"]}</p>
                                <p className="timetable-event-duration">{moment(item["time_from"]["date"]).format('HH:mm')} - {moment(item["time_to"]["date"]).format('HH:mm')}</p>
                            </div>
                        </Tooltip>
                    )) :
                    null
                }
            </td>
            <td className="214W">
                {event["214W"] ?
                    event["214W"].map((item, index) => (
                        <Tooltip key={index} title={`${item[lang]["speaker"] || ''} | ${item[lang]["topic"] || ''}`}>
                            <div className="timetable-event">
                                <h4 className="timetable-event-name">{item[lang]["speaker"]}</h4>
                                <p className="timetable-event-desc">{item[lang]["topic"]}</p>
                                <p className="timetable-event-duration">{moment(item["time_from"]["date"]).format('HH:mm')} - {moment(item["time_to"]["date"]).format('HH:mm')}</p>
                            </div>
                        </Tooltip>
                    )) :
                    null
                }
            </td>
            <td className="308E">
                {event["308E"] ?
                    event["308E"].map((item, index) => (
                        <Tooltip key={index} title={`${item[lang]["speaker"] || ''} | ${item[lang]["topic"] || ''}`}>
                            <div className="timetable-event">
                                <h4 className="timetable-event-name">{item[lang]["speaker"]}</h4>
                                <p className="timetable-event-desc">{item[lang]["topic"]}</p>
                                <p className="timetable-event-duration">{moment(item["time_from"]["date"]).format('HH:mm')} - {moment(item["time_to"]["date"]).format('HH:mm')}</p>
                            </div>
                        </Tooltip>
                    )) :
                    null
                }
            </td>
        </tr>
    )
};

export default (props) => {
    const events = props.data[props.day];

    if (events) {
        return (<div className="timetable-table-wrapper">
            <table className="timetable-table">
                <thead className="timetable-header">
                <tr>
                    <th className="empty-header"></th>
                    <th>Big Hall</th>
                    <th>113W room</th>
                    <th>114W room</th>
                    <th>208E room</th>
                    <th>213W room</th>
                    <th>214W room</th>
                    <th>308E room</th>
                </tr>
                </thead>
                <tbody className="timetable-body">
                    {Object.keys(events).map(renderEvent.bind(null, events, props.lang.language.locale))}
                </tbody>
            </table>
        </div>)
    } else {
        return <div />
    }
};
