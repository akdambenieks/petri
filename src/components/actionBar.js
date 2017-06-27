import React, {Component} from 'react';
import StartMenu from './startMenu';
import $ from 'jquery';

class ActionBar extends Component {
  render() {
    let actionButtons;
    if (this.props.gameState === 'start') {
      actionButtons = (
        <StartMenu players={this.props.players} boardRadius={this.props.boardRadius} nutrientDensity={this.props.nutrientDensity} />
      );
    } else if (this.props.gameState === 'active') {
      actionButtons = <p>Game Startes</p>
    }
    return (
      <div id="action_bar">
        {actionButtons}
      </div>
    );
  }
}

export default ActionBar;
