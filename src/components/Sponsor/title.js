import React, {Component} from 'react';

export default class Title extends Component {
  render() {
    return (
      <h5 className="com-sponsor-title">{this.props.children}</h5>
    )
  }
}
