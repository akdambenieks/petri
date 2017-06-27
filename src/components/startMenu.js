import React, {Component} from 'react';
import $ from 'jquery';

class StartMenu extends Component {
  constructor() {
    super();
    this.state = {
      newGame: {}
    };
    this.handleStartGame = this.handleStartGame.bind();
  }

  static defaultProps = {playerNums: [2,3,4,5,6],
                        nutrientDensityOptions: ['scarce','average','abundant']}

  handleStartGame = (event) => {
    event.preventDefault();
    this.setState({newGame: {
        players: this.refs.players.value,
        boardRadius: this.refs.boardRadius.value,
        nutrientDensity: this.refs.nutrientDensity.value
      }
    }, function () {
      console.log(this.state.newGame);
    })
  }

  render() {

    let players = this.props.playerNums.map(n => {
      let checked = this.props.players === n ? true : false;
      return (<div key={n}>
                <label htmlFor={n}>{n}</label>
                <input type="radio" name="players" ref="players" value={n} defaultChecked={checked}/>
              </div>)
    });

    let nutrientDensity = this.props.nutrientDensityOptions.map((d,i) => {
      let checked = this.props.nutrientDensity === (1+i) ? true : false;
      return (<div key={d}>
                <label htmFor={d}>{d}</label>
                <input type="radio" name="nutrient_density" ref="nutrientDensity" value={1+i} defaultChecked={checked} />
              </div>)
    });

    return (
      <div id="start_menu">
        <form onSubmit={this.handleStartGame}>
          <label>Players</label>
          {players}
          <hr />
          <label>Board Radius</label>
          <input ref="boardRadius" type="number" min="4" max="12" defaultValue={this.props.boardRadius} />
          <hr />
          <label>Nutrient Density</label>
          {nutrientDensity}
          <hr />
          <input type="submit" value="Start Game" />
        </form>
      </div>
    );
  }
}

export default StartMenu;
