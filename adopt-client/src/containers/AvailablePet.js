import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AvailablePet.css';
import '../icons/icofont/css/icofont.css';

const ANIMAL_ICON = {
  dogs: 'dog-alt',
  cats: 'cat',
  birds: 'pigeon-alt',
  frogs: 'frog'
}

class AvailablePet extends Component {
  static propTypes = {
    animal: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      animals: {},
      activeCard: {}
    };
    this.onExit = this.onExit.bind(this);
  }
  componentDidMount() {
    // this would be an ajax call to get total count of available animals
    this.setState({
      animals: {
        dogs: 42,
        cats: 16,
        birds: 3,
        frogs: 2
      }
    });
  }
  onHover(animal) {
    this.setState({
      activeCard: {
        animal,
        count: this.state.animals[animal]
      }
    });
  }
  onExit() {
    this.setState({
      activeCard: {}
    });
  }
  render () {
    const { animal } = this.props;
    const { activeCard } = this.state;
    const display = Object.keys(activeCard).length > 0 ?
      <div className="count-display">
        <p>{activeCard.count}</p>
        <p>{activeCard.animal}</p>
      </div> :
      <i className={`icofont icofont-animal-${ANIMAL_ICON[animal]}`}></i>
    return(
      <div 
        className="available-animal-card"
        onMouseOver={this.onHover.bind(this, animal)}
        onMouseLeave={this.onExit}
      >
        {display}
      </div>
    );
  }
}

export default AvailablePet;