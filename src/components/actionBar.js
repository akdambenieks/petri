import React, {Component} from 'react';
import $ from 'jquery';

class ActionBar extends Component {
  render() {
    return (
      <div>
        {this.props.gameState}
      </div>
    );
  }
}

export default ActionBar;
