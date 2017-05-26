import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchDateTable} from "../actions/DateTableAction"
import {Table} from "react-bootstrap"
import _ from "lodash"
import moment from "moment"

function MapToData(item) {
    let time_from = moment(item.time_from.date)
    let time_too = moment(item.time_to.date)

    let TimeFromMinutes = time_from.minute() ? time_from.minute() : "00"
    let TimeTooMinutes = time_too.minute() ? time_too.minute() : "00"

    return (
        <div className="event-description" key={item.id}>
            <p className="time-range">{time_from.hours() + ":" + TimeFromMinutes }
                - {time_too.hours() + ":" + TimeTooMinutes} </p>
            <p className="speaker-name">{item.en.speaker}</p>
            <p className="description">{item.en.topic}
            </p>
        </div>
    )
}

class MapToMobileData extends Component {

    constructor(props) {
        super(props)

        this.state = {
            day: 27
        }
    }

    renderTableItems(cols) {
        const TimeCols = []

        cols.map((item, id) => {
            let time_from = moment(item.time_from.date)
            let time_too = moment(item.time_to.date)

            let TimeFromMinutes = time_from.minute() !== 0 ? time_from.minute() : "00"
            let TimeTooMinutes = time_too.minute() !== 0 ? time_too.minute() : "00"
            let dateFrom = moment(item.time_from.date).date()
            if (this.props.day === dateFrom) {
                TimeCols.push(
                    <div className="single-event-mobile" key={id}>
                        <h4 className="event-time-mobile">
                            {time_from.hours() + ":" + TimeFromMinutes }
                            - {time_too.hours() + ":" + TimeTooMinutes}
                        </h4>
                        <h5 className="speaker-name-mobile">
                            {item.en.speaker}
                        </h5>
                        <p className="event-description-mobile">
                            {item.en.topic}
                        </p>
                    </div>
                )
            }
        })

        return (
            <div>{TimeCols}</div>
        )
    }

    render() {
        const Tem = []
        const self = this

        if (this.props.props) {

            this.props.props.map(function (data, id) {

                Tem.push(
                    <div className="panel panel-default" key={id}>

                        <div className="panel-heading" role="tab" id={"heading" + id}>
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion"
                                   href={"#collapse" + id} aria-expanded="true" aria-controls="collapseOne">
                                    {data.room}
                                </a>
                            </h4>
                        </div>

                        <div id={"collapse" + id} className="panel-collapse collapse in" role="tabpanel"
                             aria-labelledby={"heading" + id}>
                            <div className="panel-body">
                                {self.renderTableItems(data.cols)}
                            </div>
                        </div>
                    </div>
                )
            })
            return (
                <div> {Tem}</div>
            )

        } else {
            return (
                <div className="loader">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <h3>Loading...</h3>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


class Timetable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dayState: 27,
            dayOne: "active",
            daytwo: " "
        }

        this.props.timeTable()
        this.switchDays = this.switchDays.bind(this)
        this.switchDaysnew = this.switchDaysnew.bind(this)

    }

    switchDays(e) {
        e.preventDefault()
        this.setState({dayState: 28, daytwo: "active", dayOne: ""})
    }

    switchDaysnew(e) {
        e.preventDefault()
        this.setState({dayState: 27, dayOne: 'active', daytwo: ""})
    }

    render() {
        const self = this
        const row = ["Big Hall", "208E", "308E", "213W", "214W"]
        const RowCols = []
        const columns = []
        const MobileCols = []
        let DataTable = Object.keys(this.props.timeTableState)
        if (DataTable.length > 0) {
            _.forEach(row, function (n, key) {
                RowCols.push(<th key={key}>{n}</th>)
            })

            _.forEach(this.props.timeTableState.items, function (item, key) {
                const h1 = []
                const W114 = []
                const W213 = []
                const W113 = []
                const W214 = []
                const E208 = []
                const E308 = []
                _.forEach(item.item, function (data, x) {
                    let dateFrom = moment(data.time_from.date).date()

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
                            case "308E":
                                E308.push(MapToData(data))
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
                        <td>{E208}</td>
                        <td>{E308}</td>
                        <td>{W213}</td>
                        <td>{W214}</td>
                    </tr>)
            })
        }


        return (
            <div id="timetable">
                <div className="top-grey-border hidden-xs"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="timetable-top-bar">
                                <img className="timetable-image" src={require('../../public/img/timetable.png')}/>
                                <div className="day-selection">
                                    <h4>Days</h4>
                                    <a className={"select-day " + this.state.dayOne} href="#"
                                       onClick={(e) => this.switchDaysnew(e)}>27</a>
                                    <a className={"select-day " + this.state.daytwo} href="#"
                                       onClick={(e) => this.switchDays(e)}>28</a>
                                </div>
                                <div className="time-range hidden-xs">
                                    <h4>10:00 - 17:00</h4>
                                </div>
                                {/*<div className="event-type hidden-xs">*/}
                                    {/*<div className="speak"></div>*/}
                                    {/*<h5>Talk</h5>*/}
                                    {/*<div className="workshop"></div>*/}
                                    {/*<h5>Workshop</h5>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 table-wrapper hidden-xs">
                            <Table className="timetable-all">
                                <tbody>
                                <tr className="heading">
                                    <th className="empty"></th>
                                    {RowCols}
                                </tr>
                                {columns}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="col-xs-12 mobile-timetable visible-xs">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                            <MapToMobileData props={this.props.timeTableState.names} day={this.state.dayState}/>
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
