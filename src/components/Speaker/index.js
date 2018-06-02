import React, {Component} from 'react';
import './speaker.less';

class Speaker extends Component {
    render() {
        return (
            <div className="com-speaker">
              <div>
                <img src={this.props.avatar} className="com-speaker-avatar" alt={this.props.name} />
                <h5 className="com-speaker-name">{this.props.name}</h5>
                <p className="com-speaker-position">{this.props.position}</p>
                <p className="com-speaker-title">{this.props.title}</p>
              </div>
            </div>
        );
    }
}

export default Speaker;
