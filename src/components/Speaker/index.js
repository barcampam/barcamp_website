import React, {Component} from 'react';
import './speaker.less';
import facebookLogo from '../../image/facebook-white.png';
import twitterLogo from '../../image/white-twitter.png';
import instagramLogo from '../../image/white-instagram.png';

class Speaker extends Component {

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="com-speaker">
              <div>
                <div className="overlay-wrapper">
                    <img src={this.props.avatar} className="com-speaker-avatar" alt={this.props.name} />
                    <div className="overlay">
                        <div className="speaker-social-networks">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src={facebookLogo} alt="Facebook"/>
                            </a>

                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src={twitterLogo} alt="Twitter"/>
                            </a>

                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src={instagramLogo} alt="Instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
                <h5 className="com-speaker-name">{this.props.name}</h5>
                <p className="com-speaker-position">{this.props.position}</p>
                <p className="com-speaker-title">{this.props.title}</p>
              </div>
            </div>
        );
    }
}

export default Speaker;
