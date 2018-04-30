const mongoose = require('mongoose');
const dogBreeds = require('../public/assets/data/dogs.json');

const COLORS = ['brown', 'black', 'gray', 'white', 'red'];
const GENDERS = ["F", "M"];
const BREEDS = dogBreeds.dogs;

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    set: capitalize,
    required: 'Pet name required.'
  },
  age: {
    type: Number,
    min: 0,
    required: 'Pet age required.'
  },
  breed: {
    type: String,
    enum: BREEDS,
    required: 'Pet breed required.'
  },
  color: {
    type: String,
    set: lowercase,
    enum: COLORS,
    required: 'Pet coat color required.'
  },
  gender: {
    type: String,
    set: capitalize,
    enum: GENDERS,
    required: 'Pet gender required.'
  },
  available: {
    type: Boolean,
    default: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

function capitalize(val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
}

function lowercase(val) {
  return val.toLowerCase();
}

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;