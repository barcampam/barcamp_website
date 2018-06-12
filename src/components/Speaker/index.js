import React, {Component} from 'react';
import { Icon } from 'antd';
import './speaker.less';
import facebookLogo from '../../image/facebook-white.png';
import twitterLogo from '../../image/white-twitter.png';
import instagramLogo from '../../image/white-instagram.png';
import shadow from '../../image/shadow.png';

class Speaker extends Component {
    render() {
        return (
            <div className="com-speaker">
              <div className="com-speaker-wrapper">
                  <div>
                      <div className="overlay-wrapper">
                          <img src={this.props.avatar} className="com-speaker-avatar" alt={this.props.name} />
                          <div className="overlay">
                              <div className="speaker-social-networks">
                                  {
                                      this.props.socialNetworks.facbook !== null ?
                                          <a href={this.props.socialNetworks.facbook} target="_blank" rel="noopener noreferrer">
                                              <img src={facebookLogo} alt="Facebook"/>
                                          </a> : null
                                  }

                                  {
                                      this.props.socialNetworks.twitter !== null ?
                                          <a href={this.props.socialNetworks.twitter} target="_blank" rel="noopener noreferrer">
                                              <img src={twitterLogo} alt="Twitter"/>
                                          </a> : null
                                  }

                                  {
                                      this.props.socialNetworks.instagram !== null ?
                                          <a href={this.props.socialNetworks.instagram} target="_blank" rel="noopener noreferrer">
                                              <img src={instagramLogo} alt="Instagram"/>
                                          </a> : null
                                  }

                                  {
                                      this.props.socialNetworks.linkedin !== null ?
                                          <a href={this.props.socialNetworks.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                              <Icon type="linkedin" />
                                          </a> : null
                                  }
                              </div>
                          </div>
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
