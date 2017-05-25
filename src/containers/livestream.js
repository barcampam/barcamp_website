import React, {Component} from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {returnLiveStream} from "../actions/liveStreamAction"

class Livestream extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "",
            room: "",
            key: 0
        }
        this.props.returnLiveStream()
    }


    renderRumes() {
        const self = this
        console.log(this.props.liveStream)
        if (this.props.liveStream.length) {
            const itemUl = this.props.liveStream.map((item, key) => {
                if (key === this.state.key) {
                    return (
                        <li className="active-room" key={key}
                            onClick={(e) => self.setState({url: item.url, room: item.room})}>
                            <span>{item.room}</span>
                        </li>
                    )
                } else {
                    return (
                        <li key={key} onClick={(e) => self.setState({url: item.url, room: item.room, key})}>
                            <span>{item.room}</span>
                        </li>
                    )
                }
            })

            if (!this.state.url) {
                const live = this.props.liveStream[0]
                this.setState({url: live.url, room: live.room})
            }

            return (<ul>{itemUl}</ul>)
        } else {
            return (<div>...Loading</div>)
        }

    }

    render() {
        const self = this
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="livestream-top-bar">
                                <img src={require('../../public/img/Livestream.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="livestream-wrapper">
                    <div className="container livestream-section">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 room-select">
                                {this.renderRumes()}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="video-wrapper">
                                    <iframe width="560" height="315" src={self.state.url}
                                            frameBorder="0" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3"></div>
                        </div>
                    </div>
                    <div className="red-box"></div>
                </section>
            </div>
        );
    }
}

function mapToActionTime(dispatch) {

    return bindActionCreators({
        returnLiveStream
    }, dispatch)

}

function mapToStateAction({liveStream}) {
    return {liveStream}
}
export default connect(mapToStateAction, mapToActionTime)(Livestream)