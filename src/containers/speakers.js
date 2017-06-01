import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchSpeaker} from "../actions/SpeakerAction"

class Speakers extends Component {
    constructor(props) {
        super(props)

        this.props.fetchSpeaker()
    }

    renderSpeakers() {

        if(!this.props.speakers.length){
            return <div>...Lodaing</div>
        }

        return this.props.speakers.map((data,id) => {

            let photo = data.photo
            return (
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" key={id}>
                    <div className="single-speaker">
                        <div className={hovered(data.socialnetworks) + " hidden-xs"}>
                            <div className="hovered-links">
                                {data.socialnetworks.facbook && <a href={data.socialnetworks.facbook}><img src={require('../../public/img/fb_purple.svg')}/></a>}
                                {data.socialnetworks.twitter && <a href={data.socialnetworks.twitter}><img src={require('../../public/img/twitter_purple.svg')}/></a>}
                                {data.socialnetworks.instagram && <a href={data.socialnetworks.instagram}><img src={require('../../public/img/insta_purple.svg')}/></a>}
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
                        <h5>{data['en'].name}</h5>
                        <p className="talk-name">{data['en'].topic}</p>
                    </div>
                </div>
            )
        })


    }

    render() {

        return (
            <section id="speakers">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="speakers-top-bar">
                                <img src={require('../../public/img/speakers.png')}/>
                                <a href="/all-speakers">See all (78)</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row speakers-single-row">
                        {this.renderSpeakers()}
                    </div>
                </div>
            </section>
        )
    }
}
function mapToActionTime(dispatch) {

    return bindActionCreators({
        fetchSpeaker
    }, dispatch)

}

function mapToStateAction({speakers}) {
    return {speakers}
}

function hovered({facbook,twitter,instagram}) {
    if(!facbook && !twitter && !instagram){
        return
    }
    return "hovered"
}

export default connect(mapToStateAction, mapToActionTime)(Speakers)
