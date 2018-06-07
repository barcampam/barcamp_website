import React, {Component} from 'react';
import './gallery.less';

class Gallery extends Component {
    render() {
        return (
            <div className="com-gallery" onClick={this.props.onClick}>
              <div>
                <img src={this.props.photo} className="com-gallery-img" alt={"Gallery"} />
              </div>
            </div>
        );
    }
}

export default Gallery;
