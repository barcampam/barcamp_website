import React from 'react';
import {Tooltip} from 'antd';
import moment from "moment/moment";

const renderEvent = (events, lang, index) => {
    const event = events[index];

    if(!!Object.keys(event).reduce((i, j) => (
        i === null ? null : event[i][lang]["topic"] === event[j][lang]["topic"] ? i : null
    ))) {
        return (
            <tr key={index}>
                <td colSpan={7}>
                    <Tooltip title={event["Big Hall"][lang]["topic"]}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["Big Hall"][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["Big Hall"][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["Big Hall"]["time_from"]["date"]).format('HH:mm')} - {moment(event["Big Hall"]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip>
                </td>
            </tr>
        );
    }

    return (
        <tr key={index}>
            <td className="bigHall">
                {event["Big Hall"] ?
                    <Tooltip title={`${event["Big Hall"][lang]["speaker"]} | ${event["Big Hall"][lang]["topic"]}`}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["Big Hall"][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["Big Hall"][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["Big Hall"]["time_from"]["date"]).format('HH:mm')} - {moment(event["Big Hall"]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip> :
                    null
                }
            </td>
            <td className="113W">
                {event["113W"] ?
                    <Tooltip title={`${event["113W"][lang]["speaker"]} | ${event["113W"][lang]["topic"]}`}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["113W"][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["113W"][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["113W"]["time_from"]["date"]).format('HH:mm')} - {moment(event["113W"]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip> :
                    null
                }
            </td>
            <td className="114W">
                {event["114W"] ?
                    <Tooltip title={`${event["114W"][lang]["speaker"]} | ${event["114W"][lang]["topic"]}`}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["114W"][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["114W"][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["114W"]["time_from"]["date"]).format('HH:mm')} - {moment(event["114W"]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip> :
                    null
                }
            </td>
            <td className="208E">
                {event["208E"] ?
                    <Tooltip title={`${event["208E"][lang]["speaker"]} | ${event["208E"][lang]["topic"]}`}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["208E"][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["208E"][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["208E"]["time_from"]["date"]).format('HH:mm')} - {moment(event["208E"]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip> :
                    null
                }
            </td>
            <td className="213W">
                {event["213W"] ?
                    <Tooltip title={`${event["213W"][lang]["speaker"]} | ${event["213W"][lang]["topic"]}`}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["213W"][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["213W"][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["213W"]["time_from"]["date"]).format('HH:mm')} - {moment(event["213W"]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip> :
                    null
                }
            </td>
            <td className="214W">
                {event["214W"] ?
                    <Tooltip title={`${event["214W"][lang]["speaker"]} | ${event["214W"][lang]["topic"]}`}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["214W"][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["214W"][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["214W"]["time_from"]["date"]).format('HH:mm')} - {moment(event["214W"]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip> :
                    null
                }
            </td>
            <td className="308E">
                {event["308E"] ?
                    <Tooltip title={`${event["308E"][lang]["speaker"]} | ${event["308E"][lang]["topic"]}`}>
                        <div className="timetable-event">
                            <h4 className="timetable-event-name">{event["308E"][lang]["speaker"]}</h4>
                            <p className="timetable-event-desc">{event["308E"][lang]["topic"]}</p>
                            <p className="timetable-event-duration">{moment(event["308E"]["time_from"]["date"]).format('HH:mm')} - {moment(event["308E"]["time_to"]["date"]).format('HH:mm')}</p>
                        </div>
                    </Tooltip> :
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
            <table className="timetable-times">
                <thead>
                <tr>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>10:00</td>
                </tr>
                <tr>
                    <td>11:00</td>
                </tr>
                <tr>
                    <td>12:00</td>
                </tr>
                <tr>
                    <td>13:00</td>
                </tr>
                <tr>
                    <td>14:00</td>
                </tr>
                <tr>
                    <td>15:00</td>
                </tr>
                <tr>
                    <td>16:00</td>
                </tr>
                <tr>
                    <td>17:00</td>
                </tr>
                <tr>
                    <td>18:00</td>
                </tr>
                </tbody>
            </table>
            <table className="timetable-table">
                <thead className="timetable-header">
                <tr>
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
