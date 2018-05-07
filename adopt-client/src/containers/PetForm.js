import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { petPropTypes } from '../utils/propTypeValues';
import FormTitle from '../components/FormTitle';
import defaultImg from '../images/img_default.png';
import notFoundImg from '../images/img_not_found.jpeg';
import { API_URL, petPropCollections } from '../utils/constants';
import './PetForm.css';

const { COLORS } = petPropCollections;

class PetForm extends Component {
  static defaultProps = {
    pets: [],
    onSubmit: () => {}
  };
  static propTypes = {
    pets: PropTypes.arrayOf(petPropTypes),
    type: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: '',
      breed: '',
      color: '',
      img: '',
      breeds: [],
      touched: {
        name: false,
        age: false,
        gender: false,
        breed: false,
        color: false,
        img: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentDidMount() {
    fetch(API_URL.dogs)
      .then(res => res.json())
      .then(data => {
        const breeds = data[0].breeds;
        const id = this.props.match.params.id;
        const pets = this.props.pets;
        if (id && pets.length > 0) {
          const pet = pets.find(pet => pet._id === id);
          const { name, age, gender, breed, color, img } = pet;
          this.setState({ 
            name,
            age,
            gender,
            breed,
            color,
            img,
            breeds
          });
        } else {
          this.setState({ breeds });
        }
      })
      .catch(err => console.log('Something went wrong.', err));
  }
  handleBlur = field => e => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const id = this.props.match.params.id; 
    const { breeds, touched, ...pet } = this.state;
    this.props.onSubmit(pet, id);
    e.target.reset();
  }
  render () {
    // input values
    const { name, age, gender, breed, color, img } = this.state;
    // dropdown options
    const breedOptions = getSelectOptions(this.state.breeds);
    const colorOptions = getSelectOptions(COLORS);

    // data validations
    const errors = validate(this.state);
    const isDisabled = Object.keys(errors).some(key => errors[key]);
    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    }

    return(
      <div className="pet-form-container">
        <FormTitle text={this.props.type} />
        <form className="pet-form" onSubmit={this.handleSubmit}>
          {/* form inputs */}
          <div className="pet-input-section">
            <label htmlFor="pet-name-input">
              Name
              <input
                id="pet-name-input"
                className={`text-input-field ${shouldMarkError('name') ? "input-error" : ""}`}
                key="name"
                name="name"
                type="text"
                value={name}
                autoComplete="off"
                onChange={this.handleChange}
                onBlur={this.handleBlur("name")}
                autoFocus
                required
              />
            </label>
            <label htmlFor="pet-age-input">
              Age
              <input
                id="pet-age-input"
                className={`text-input-field ${shouldMarkError('age') ? "input-error" : ""}`}
                key="age"
                name="age"
                type="number"
                min="0"
                step="0.1"
                value={age}
                autoComplete="off"
                onChange={this.handleChange}
                onBlur={this.handleBlur("age")}
                required
              />
            </label>
            <label htmlFor="pet-gender-input">
              Gender
              <div id="pet-gender-input" onChange={this.handleChange}>
                <label htmlFor="female-choice">
                  <div className={`radio-container ${shouldMarkError('gender') ? "input-error" : ""}`}>
                    <input
                      id="female-choice"
                      key="female"
                      name="gender"
                      type="radio"
                      value="F"
                      checked={gender === "F"}
                      onBlur={this.handleBlur("gender")}
                      required
                    />
                  </div>
                  <span className="radio-label">Female</span>
                </label>
                <label htmlFor="male-choice">
                  <div className={`radio-container ${shouldMarkError('gender') ? "input-error" : ""}`}>
                    <input
                      id="male-choice"
                      key="male"
                      name="gender"
                      type="radio"
                      value="M"
                      checked={gender === "M"}
                      onBlur={this.handleBlur("gender")}
                      required
                    />
                  </div>
                  <span className="radio-label">Male</span>
                </label>
              </div>
            </label>
          </div>
          <div className="pet-input-section">
            <label htmlFor="pet-breed-input">
              Breed
              <select 
                id="pet-breed-input"
                className={`text-input-field ${shouldMarkError('breed') ? "input-error" : ""}`}
                key="breed"
                name="breed"
                value={breed}
                onChange={this.handleChange}
                onBlur={this.handleBlur("breed")}
                required
              >
                {breedOptions}
              </select>
            </label>
            <label htmlFor="pet-color-input">
              Color
              <select
                id="pet-color-input"
                className={`text-input-field ${shouldMarkError('color') ? "input-error" : ""}`}
                key="color"
                name="color"
                value={color}
                onChange={this.handleChange}
                onBlur={this.handleBlur("color")}
                required
              >
                {colorOptions}
              </select>
              </label>
            <label htmlFor="pet-img-input">
              Image URL
              <input
                id="pet-img-input"
                className={`text-input-field ${shouldMarkError('img') ? "input-error" : ""}`}
                key="img"
                name="img"
                type="text"
                value={img}
                autoComplete="off"
                onChange={this.handleChange}
                onBlur={this.handleBlur("img")}
              />
            </label>
          </div>
          <div className="pet-input-section">
            <label htmlFor="pet-img-preview">
              Image Preview
              <img 
                id="pet-img-preview"
                src={img ? (checkURL(img) ? img : notFoundImg) : defaultImg} 
                alt="pet" 
                onError={(e) => {
                  e.target.onError = null; 
                  e.target.src = notFoundImg
                }}
              />
            </label>
            <p className="image-formats">
              <strong>Supported file formats</strong>: .bmp, .jpeg, .jpg, .png, .tiff
            </p>
          </div>
          {/* submit button */}
          <button 
            className="submit-button" 
            type="submit"
            disabled={isDisabled}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

function validate({ name, age, gender, breed, color, img }) {
  return {
    name: name.length === 0,
    age: !Number.isFinite(+age) || age.length === 0,
    gender: gender.toLowerCase() !== 'f' && gender.toLowerCase() !== 'm',
    breed: breed.length === 0,
    color: color.length === 0,
    img: img.length > 0 ? !checkURL(img) : false
  }
}

function checkURL(url) {
  return(url.match(/\.(bmp|jpeg|jpg|png|tiff)$/) != null);
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

export default PetForm;