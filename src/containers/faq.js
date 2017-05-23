import React, {Component} from 'react';
import {fetchFormPost} from "../actions/faqFormAction"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"


 class FAQ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            text: "",
            error: {
                email: "",
                text: ""
            }
        }
    }

    onSubmitForm(e) {
        e.preventDefault()
        const email = this.state.value
        const text = this.state.text

        let atpos = email.indexOf("@");
        let dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            this.setState({error: {email: "Not a valid e-mail address"}})
            return false;
        } else if (!text.trim()) {
            this.setState({error: {text: "Please fill message input "}})
            return false
        }

        this.props.fetchFormPost(email,text)


    }

    render() {
        return (
            <div>
                <div className="container-fluid faq-section">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                            <h1>FAQ</h1>
                            <h4>I received a confirmation letter from Eventbrite. What should I do?</h4>
                            <p>Congrats, that means your registration was successful. Either save the mail or delete it,
                                you'll get a reminder couple of days before BarCamp. Bring your tickets, you can print
                                them or bring the digital copy, that is your mail or attached pdf.</p>
                            <h4>Should I register, if I'm not planning to make a presentation?</h4>
                            <p>Yes! Registration is desirable for all participants, including those, who only come to
                                watch.</p>
                            <h4>Where is the timetable of the event. When should I come?</h4>
                            <p>The BarCamp agenda is made by the participants themselves. Each day there will be a blank
                                timetable board in the corridor, where anyone can register the presentation they are
                                planning to make. We also have some guest speakers and workshops, they do their talks in
                                Big Hall and 2 workshop rooms. Timetable of these will be available on the webpage and
                                FB page as soon as we have them.</p>
                            <h4>Can I come late or join the BarCamp only for one day?</h4>
                            <p>Yes, you can.</p>
                            <h4>When will we get the badges?</h4>
                            <p>When you come to BarCamp approach the volunteers in the corridor where registration
                                process is taking place. They will check-in you and give your badge and T-shirt (if you
                                are early enough ;) )</p>
                            <h4>Can I come and present a website that I've created?</h4>
                            <p>Direct presentations of a website or a company are not cool. Try to present an
                                interesting technical solution, idea or topic that can teach something to the
                                participants and feel free to use examples from your company or website. The key
                                requirement is to make an interesting and/or useful presentation for the audience.
                                Remember, our participants will "vote with their feet" and boring presentations will
                                eventually end up facing an empty room. That's not something you'd want, would you?</p>
                            <h4>Who is the organizer of the event.</h4>
                            <p>BarCamp is organized by independent people solely on volunteer basis. Media Initiatives
                                Center and individuals, who work for various companies help in organizing the event.</p>
                            <h4>Will presentations be filmed or broadcast online?</h4>
                            <p>There will be live video streaming from all presentation rooms on YouTube. The livestream
                                won’t be a priority though, the main purpose is to have great quality videos some 10-15
                                days after the event.</p>
                            <h4>What formats should the presentations be in?</h4>
                            <p>Bring them in a format that makes sense: pdf, ppt, web based, etc. And make sure to use
                                Unicode and fonts that are not rare enough to be registered in the Red Book. ;)</p>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 form-wrapper">
                            <h4>Ask us your question?</h4>
                            <form onSubmit={(e) => this.onSubmitForm(e)}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={this.state.email} onChange={(e) => {
                                        this.setState({value: e.target.value})
                                    }} className="form-control" id="email"/>
                                    <span>{this.state.error.email && this.state.error.email}</span>
                                </div>
                                <div className="form-group">
                                    <label>Your question</label><br />
                                    <textarea className="form-control" rows="8" value={this.state.text}
                                              onChange={(e) => {
                                                  this.setState({text: e.target.value})
                                              }} id="message"/>
                                    <span>{this.state.error.text && this.state.error.text}</span>

                                </div>
                                <button type="submit" className="submit">Submit
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapToActionTime(dispatch) {

    return bindActionCreators({
        fetchFormPost
    }, dispatch)

}

export default connect(null, mapToActionTime)(FAQ)
