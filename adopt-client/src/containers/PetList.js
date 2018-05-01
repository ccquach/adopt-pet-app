import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPets } from '../actions/index';
import Pet from '../components/Pet';
import './PetList.css';

class PetList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPets();
  }
  render () {
    // debugger;
    let pets = this.props.pets.map(pet => (
      <Pet
        key={pet._id}
        pet={pet}
      />
    ));
    return(
      <div className="pet-list">
        {pets}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { getPets })(PetList);