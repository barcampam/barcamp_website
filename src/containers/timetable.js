import React, {Component} from "react"


class Timetable extends Component{
    render(){
        return(
            <div>
                <div className="top-grey-border"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="timetable-top-bar">
                                <img src={require('../../public/img/timetable.png')} />
                                <div className="day-selection">
                                    <h4>Days</h4>
                                    <a className="select-day active" href="">27</a>
                                    <a className="select-day" href="">28</a>
                                </div>
                                <div className="time-range">
                                    <h4>10:00 - 17:00</h4>
                                </div>
                                <div className="event-type">
                                    <div className="speak"></div>
                                    <h5>Talk</h5>
                                    <div className="workshop"></div>
                                    <h5>Workshop</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 table-wrapper">
                            <table className="timetable-all">
                                <tbody>
                                <tr className="heading">
                                    <th className="empty"></th>
                                    <th>Big hall</th>
                                    <th>207</th>
                                    <th>241</th>
                                    <th>324</th>
                                    <th>205</th>
                                    <th>311</th>
                                </tr>
                                <tr>
                                    <td className="time">10:00</td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">11:00</td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">12:00</td>
                                    <td></td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">13:00</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">14:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">15:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="time">16:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="time">17:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div className="event-description">
                                            <p className="time-range">10:00 -10:45 </p>
                                            <p className="speaker-name">Harut Martirosyan</p>
                                            <p className="description">Lorem ipsum se amat
                                                sebun sana palabanala
                                            </p>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Timetable
