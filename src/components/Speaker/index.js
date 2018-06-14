import React, {Component} from 'react';
import { Icon } from 'antd';
import './speaker.less';
import facebookLogo from '../../image/facebook.png';
import twitterLogo from '../../image/twitter.png';
import instagramLogo from '../../image/instagram.png';
import shadow from '../../image/shadow.png';
import defaultSpeaker from '../../image/1.svg';

class Speaker extends Component {

    componentWillMount() {
        console.log(typeof this.props.avatar);
    }
    render() {
        return (
            <div className="com-speaker">
              <div className="com-speaker-wrapper">
                  <div>
                      <div className="overlay-wrapper">
                          <img src={this.props.avatar !== "http://api.barcamp.am" ? this.props.avatar : defaultSpeaker} className="com-speaker-avatar" alt={this.props.name} />
                          <div className="overlay">
                              <div className="speaker-social-networks">
                                    {
                                        this.props.socialNetworks.facbook !== null ?
                                            <a href={this.props.socialNetworks.facbook} target="_blank" rel="noopener noreferrer">
                                                <div className="speaker-social-network-cirlcle">
                                                    <img src={facebookLogo} alt="Facebook"/>
                                                </div>
                                            </a> : null
                                    }

                                    {
                                            this.props.socialNetworks.twitter !== null ?
                                                <a href={this.props.socialNetworks.twitter} target="_blank" rel="noopener noreferrer">
                                                    <div className="speaker-social-network-cirlcle">
                                                        <img src={twitterLogo} alt="Twitter"/>
                                                    </div>
                                                </a> : null
                                    }

                                    {
                                        this.props.socialNetworks.instagram !== null ?
                                            <a href={this.props.socialNetworks.instagram} target="_blank" rel="noopener noreferrer">
                                                <div className="speaker-social-network-cirlcle">
                                                    <img src={instagramLogo} alt="Instagram"/>
                                                </div>
                                            </a> : null
                                    }

                                    {
                                        this.props.socialNetworks.linkedin !== null ?
                                            <a href={this.props.socialNetworks.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                                <div className="speaker-social-network-cirlcle">
                                                    <Icon type="linkedin" />
                                                </div>
                                            </a> : null
                                    }
                              </div>
                          </div>
                      </div>
                    <div className="speaker-shadow">
                        <img src={shadow} alt="BarCamp shadow" />
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
