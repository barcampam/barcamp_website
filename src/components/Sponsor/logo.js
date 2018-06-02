import React, {Component} from 'react';

export default class Logo extends Component {
  render() {
    return (
      <div className="com-sponsor-logo">
        <img src={this.props.logo} alt={this.props.name}/>
      </div>
    )
  }
}
