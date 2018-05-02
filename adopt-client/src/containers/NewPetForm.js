import React, { Component } from 'react';
import './NewPetForm.css';
import defaultImg from '../images/img_default.png';

const BREEDS = ["Dalmatian", "Irish Terrier", "Longhaired Whippet"];
const COLORS = ['Brown', 'Black', 'Gray', 'White', 'Red'];

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    e.target.reset();
    this.props.history.push("/pets");
  }
  render () {
    const { name, age, gender, breed, color, img } = this.state;
    const breedOptions = getSelectOptions(BREEDS);
    const colorOptions = getSelectOptions(COLORS);
    return(
      <div className="pet-form-container">
        <h2>New Pet Form</h2>
        <form className="pet-form" onSubmit={this.handleSubmit}>
          {/* form inputs */}
          <div className="pet-input-section">
            <label htmlFor="pet-name-input">
              Name
              <input
                id="pet-name-input"
                key="name"
                name="name"
                type="text"
                value={name}
                autoComplete="off"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="pet-age-input">
              Age
              <input
                id="pet-age-input"
                key="age"
                name="age"
                type="number"
                min="0"
                step="0.1"
                value={age}
                autoComplete="off"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="pet-gender-input">
              Gender
              <div id="pet-gender-input" onChange={this.handleChange}>
                <label htmlFor="female-choice">
                  <input
                    id="female-choice"
                    key="female"
                    name="gender"
                    type="radio"
                    value="f"
                    checked={gender === "f"}
                  />
                  Female
                </label>
                <label htmlFor="male-choice">
                  <input
                    id="male-choice"
                    key="male"
                    name="gender"
                    type="radio"
                    value="m"
                    checked={gender === "m"}
                  />
                  Male
                </label>
              </div>
            </label>
          </div>
          <div className="pet-input-section">
            <label htmlFor="pet-breed-input">
              Breed
              <select 
                id="pet-breed-input"
                key="breed"
                name="breed"
                value={breed}
                onChange={this.handleChange}
              >
                {breedOptions}
              </select>
            </label>
            <label htmlFor="pet-color-input">
              Color
              <select
                id="pet-color-input"
                key="color"
                name="color"
                value={color}
                onChange={this.handleChange}
              >
                {colorOptions}
              </select>
              </label>
            <label htmlFor="pet-img-input">
              Image URL
              <input
                id="pet-img-input"
                key="img"
                name="img"
                type="text"
                value={img}
                autoComplete="off"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="pet-input-section">
            <label htmlFor="pet-img-preview">
              Image Preview
              <img 
                id="pet-img-preview"
                src={img ? img : defaultImg} 
                alt="pet" 
              />
            </label>
          </div>
          {/* submit button */}
          <button className="submit-button" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

function getSelectOptions(arr) {
  return arr.reduce((acc, next) => {
    acc.push(
      <option 
        key={next} 
        value={next}
      >
        {next}
      </option>
    );
    return acc;
  }, [<option key="default"></option>]);
}

export default NewPetForm;