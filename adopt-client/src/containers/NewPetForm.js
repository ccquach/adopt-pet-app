import React, { Component } from 'react';
import './NewPetForm.css';

class NewPetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: '',
      breed: '',
      color: '',
      img: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render () {
    const { name, age, gender, breed, color, img } = this.state;
    return(
      <form className="pet-form" onSubmit={() => {}}>
        {/* close button */}
        <button
          type="button"
          className="close-button"
          onClick={() => {}}
        >
          X
        </button>
        {/* form inputs */}
        <div className="pet-input-section">
          <label htmlFor="pet-name-input">Name</label>
          <input
            id="pet-name-input"
            key="name"
            name="name"
            type="text"
            value={name}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <label htmlFor="pet-age-input">Age</label>
          <input
            id="pet-age-input"
            key="age"
            name="age"
            type="text"
            value={age}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <label htmlFor="pet-gender-input">Gender</label>
          <input
            id="pet-gender-input"
            key="gender"
            name="gender"
            type="text"
            value={gender}
            autoComplete="off"
            onChange={this.handleChange}
          />
        </div>
        <div className="pet-input-section">
          <label htmlFor="pet-breed-input">Breed</label>
          <input
            id="pet-breed-input"
            key="breed"
            name="breed"
            type="text"
            value={breed}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <label htmlFor="pet-color-input">Color</label>
          <input
            id="pet-color-input"
            key="color"
            name="color"
            type="text"
            value={color}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <label htmlFor="pet-img-input">Image URL</label>
          <input
            id="pet-img-input"
            key="img"
            name="img"
            type="text"
            value={img}
            autoComplete="off"
            onChange={this.handleChange}
          />
        </div>
        <div className="pet-input-section">
          <img src={img} alt="pet" />
        </div>
        {/* submit button */}
        <button type="submit">
          Save
        </button>
      </form>
    );
  }
}

export default NewPetForm;