import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchGuests} from "../actions/GuestsAction"


class Guests extends Component {
    constructor(props) {
        super(props)
        this.state = {
            len: localStorage.getItem("len") ? localStorage.getItem("len") : "en"
        }
        this.props.fetchGuests()
    }

    renderGuests() {
        const data = this.props.guests
        if (!data.length) {
            return <div>... Loading</div>
        }

        return data.map((item, id) => {

            return (
                <div key={id} className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="single-speaker">
                        <div className={hovered(item.socialnetworks) + " hidden-xs"}>
                            <div className="hovered-links">
                                {item.socialnetworks.facbook && <a href={item.socialnetworks.facbook}><img src={require('../../public/img/fb_purple.svg')}/></a>}
                                {item.socialnetworks.twitter && <a href={item.socialnetworks.twitter}><img src={require('../../public/img/twitter_purple.svg')}/></a>}
                                {item.socialnetworks.instagram && <a href={item.socialnetworks.instagram}><img src={require('../../public/img/insta_purple.svg')}/></a>}
                            </div>
                        </div>
                        <div className="hovered-mobile visible-xs">
                            <div className="hovered-links-mobile">
                                {item.socialnetworks.facbook && <a href={item.socialnetworks.facbook}><img src={require('../../public/img/fb_purple.svg')}/></a>}
                                {item.socialnetworks.twitter && <a href={item.socialnetworks.twitter}><img src={require('../../public/img/twitter_purple.svg')}/></a>}
                                {item.socialnetworks.instagram && <a href={item.socialnetworks.instagram}><img src={require('../../public/img/insta_purple.svg')}/></a>}
                            </div>
                        </div>
                        <img className="speaker-image" src={item.photo}/>
                        <h5>{item[this.state.len].name}</h5>
                        <p className="talk-name">{item[this.state.len].topic}</p>
                    </div>
                </div>
            )
        })

    }

    render() {



        return (
            <section id="special_guests">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="speakers-top-bar">
                                <img src={require('../../public/img/guests.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row speakers-single-row">
                        {this.renderGuests()}
                    </div>
                </div>
            </section>
        )
    }
}


function mapToActionTime(dispatch) {

    return bindActionCreators({
        fetchGuests
    }, dispatch)

}

function mapToStateAction({guests}) {
    return {guests}
}

function hovered({facbook,twitter,instagram}) {
    if(!facbook && !twitter && !instagram){
        return
    }
    return "hovered"
}

export default connect(mapToStateAction, mapToActionTime)(Guests)
