import React from 'react';

export default (props) => {
    console.log(props);

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
                <td>16:00</td>
            </tr>
            </tbody>
        </table>
        <table className="timetable-table">
            <thead className="timetable-header">
            <tr>
                <th>Big Hall</th>
                <th>117E room</th>
                <th>224C room</th>
                <th>113W room</th>
                <th>224B room</th>
            </tr>
            </thead>
            <tbody className="timetable-body">
            <tr>
                <td colSpan={5}>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Registration</h4>
                        <p className="timetable-event-duration">10:00 - 10:45</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td colSpan={5}>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Opening Ceremon</h4>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Harut Martirosyan</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Elizabeth Collins</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Harut Martirosyan</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td></td>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Elizabeth Collins</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Harut Martirosyan</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Harut Martirosyan</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Elizabeth Collins</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Elizabeth Collins</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <div className="timetable-event">
                        <h4 className="timetable-event-name">Elizabeth Collins</h4>
                        <p className="timetable-event-desc">Lorem ipsum dolor se</p>
                        <p className="timetable-event-duration">11:00 - 12:00</p>
                    </div>
                </td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </div>)
};
