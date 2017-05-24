import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchSpeakerAll} from "../actions/SpeakerAllAction"
import {bindActionCreators} from "redux"


class SpeakersAll extends Component {
    constructor(props) {
        super(props)

        this.props.fetchSpeakerAll()
    }

    renderAllSpeakers() {
        if (!this.props.speakersAll.length) {
            return <div>...Lodaing</div>
        }

        return this.props.speakersAll.map((data, id) => {
            let photo = data.photo
            return (
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" key={id}>
                    <div className="single-speaker">
                        <div className="hovered hidden-xs">
                            <div className="hovered-links">
                                <a href={data.socialnetworks.facbook}><img
                                    src={require('../../public/img/hover_fb.png')}/></a>
                                <a href={data.socialnetworks.twitter}><img
                                    src={require('../../public/img/hover_twitter.png')}/></a>
                                <a href={data.socialnetworks.instagram}><img
                                    src={require('../../public/img/barcamp_instagram.png')}/></a>
                            </div>
                        </div>
                        <div className="hovered-mobile visible-xs">
                            <div className="hovered-links-mobile">
                                <a href={data.socialnetworks.facbook}><img src={require('../../public/img/hover_fb.png')}/></a>
                                <a href={data.socialnetworks.twitter}><img src={require('../../public/img/hover_twitter.png')}/></a>
                                <a href={data.socialnetworks.instagram}><img src={require('../../public/img/barcamp_instagram.png')}/></a>
                            </div>
                        </div>
                        <img src={`${photo}`}/>
                        <h5>{data.en.name}</h5>
                        <p className="talk-name">{data.en.topic}</p>
                    </div>
                </div>
            )
        })
    }

    render() {

        console.log(this.props.speakersAll)
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="speakers-top-bar">
                                <h1>All Speakers</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row speakers-single-row">
                        {this.renderAllSpeakers()}
                    </div>
                </div>
            </div>
        )
    }
}

function mapToActionTime(dispatch) {

    return bindActionCreators({
        fetchSpeakerAll
    }, dispatch)

}

function mapToStateAction({speakersAll}) {
    return {speakersAll}
}


export default connect(mapToStateAction, mapToActionTime)(SpeakersAll)
