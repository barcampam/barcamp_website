import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchDateTable} from "../actions/DateTableAction"
import {Table} from "react-bootstrap"
import _ from "lodash"


function MapToData(item) {
    let time_from = new Date(item.time_from.date)
    let time_too = new Date(item.time_to.date)

    let TimeFromMinutes = time_from.getMinutes() ? time_from.getMinutes() : "00"
    let TimeTooMinutes = time_too.getMinutes() ? time_from.getMinutes() : "00"

    return (
        <div className="event-description" key={item.id}>
            <p className="time-range">{time_from.getHours() + ":" + TimeFromMinutes }
                - {time_too.getHours() + ":" + TimeTooMinutes} </p>
            <p className="speaker-name">{item.en.speaker}</p>
            <p className="description">{item.en.topic}
            </p>
        </div>
    )
}

function td(item) {


    const arr = []

    return _.forEach([1, 2, 3, 4, 5, 6], function () {
        arr.push(

        )
    })
    return arr
}

class Timetable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dayState: 18,
            dayOne: "active",
            daytwo: " "
        }

        this.props.timeTable()
        this.switchDays = this.switchDays.bind(this)
        this.switchDaysnew = this.switchDaysnew.bind(this)

    }

    switchDays(e) {
        e.preventDefault()
        console.log(e)
        this.setState({dayState: 19, daytwo: "active", dayOne: ""})
    }

    switchDaysnew(e) {
        e.preventDefault()
        console.log(e)
        this.setState({dayState: 18, dayOne: 'active', daytwo: ""})
    }

    render() {
        const self = this
        const row = []
        const columns = []
        let DataTable = Object.keys(this.props.timeTableState)
        if (DataTable.length > 0) {
            _.forEach(this.props.timeTableState.names, function (n, key) {
                row.push(<th key={key}>{n}</th>)
            })

            _.forEach(this.props.timeTableState.items, function (item, key) {
                const h1 = []
                const W114 = []
                const W213 = []
                const W113 = []
                const W214 = []
                const E208 = []
                _.forEach(item.item, function (data, x) {
                    let dateFrom = new Date(data.time_from.date).getDate()

                    if (dateFrom === self.state.dayState) {
                        switch (data.room) {
                            case "Big Hall":
                                h1.push(MapToData(data))
                                break
                            case "114W":
                                W114.push(MapToData(data))
                                break
                            case "213W":
                                W213.push(MapToData(data))
                                break
                            case  "113W":
                                W113.push(MapToData(data))
                                break
                            case "214W":
                                W214.push(MapToData(data))
                                break
                            case "208E":
                                E208.push(MapToData(data))
                                break
                            default:
                                return true

                        }
                    }
                })

                columns.push(
                    <tr key={key}>
                        <td>{item.name}:00</td>
                        <td>{h1}</td>
                        <td>{W114}</td>
                        <td>{W213}</td>
                        <td>{W113}</td>
                        <td>{W214}</td>
                        <td>{E208}</td>
                    </tr>)
            })
        }


        return (
            <div>
                <div className="top-grey-border"></div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="timetable-top-bar">
                                <img src={require('../../public/img/timetable.png')}/>
                                <div className="day-selection">
                                    <h4>Days</h4>
                                    <a className={"select-day " + this.state.dayOne} href="#"
                                       onClick={(e) => this.switchDaysnew(e)}>27</a>
                                    <a className={"select-day " + this.state.daytwo} href="#"
                                       onClick={(e) => this.switchDays(e)}>28</a>
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
                            <Table className="timetable-all">
                                <tbody>
                                <tr className="heading">
                                    <th className="empty"></th>
                                    {row}
                                </tr>
                                {columns}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapToActionTime(dispatch) {

    return bindActionCreators({
        timeTable: fetchDateTable
    }, dispatch)

}

function mapToStateAction({timeTableState}) {

    return {timeTableState}
}

export default connect(mapToStateAction, mapToActionTime)(Timetable)
