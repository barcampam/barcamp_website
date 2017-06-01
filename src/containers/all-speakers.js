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
            return <div className="loader">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h3>Loading...</h3>
                    </div>
                </div>
            </div>
        }


        return this.props.speakersAll.map((data, id) => {
            let photo = data.photo
            return (
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" key={id}>
                    <div className="single-speaker">
                        <div className={hovered(data.socialnetworks) + " hidden-xs"}>
                            <div className="hovered-links">
                                {data.socialnetworks.facbook && <a href={data.socialnetworks.facbook}><img
                                    src={require('../../public/img/fb_purple.svg')}/></a>}
                                {data.socialnetworks.twitter && <a href={data.socialnetworks.twitter}><img
                                    src={require('../../public/img/twitter_purple.svg')}/></a>}
                                {data.socialnetworks.instagram && <a href={data.socialnetworks.instagram}><img
                                    src={require('../../public/img/insta_purple.svg')}/></a>}
                            </div>
                        </div>
                        <div className="hovered-mobile visible-xs">
                            <div className="hovered-links-mobile">
                                {data.socialnetworks.facbook && <a href={data.socialnetworks.facbook}><img src={require('../../public/img/fb_purple.svg')}/></a>}
                                {data.socialnetworks.twitter && <a href={data.socialnetworks.twitter}><img src={require('../../public/img/twitter_purple.svg')}/></a>}
                                {data.socialnetworks.twitter && <a href={data.socialnetworks.instagram}><img src={require('../../public/img/insta_purple.svg')}/></a>}
                            </div>
                        </div>
                        <img className="speaker-image" src={`${photo}`}/>
                        <h5>{data.en.name}</h5>
                        <p className="talk-name">{data.en.topic}</p>
                    </div>
                </div>
            )
        })
    }

    render() {


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
                </div>
                <div className="container">
                    <div className="row speakers-single-row">
                        {this.renderAllSpeakers()}
                    </div>
                </div>

            </div>
        )
    }
}

function hovered({facbook,twitter,instagram}) {
    if(!facbook && !twitter && !instagram){
        return
    }
    return "hovered"
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
