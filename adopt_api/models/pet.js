const mongoose = require('mongoose');
const dogBreeds = require('./assets/data/dogs.json');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    set: capitalize,
    required: 'Pet name is required.',
  },
  age: {
    type: Number,
    min: 0,
    required: 'Pet age is required.',
  },
  breed: {
    type: String,
    enum: dogBreeds,
    required: 'Pet breed is required.',
  },
  color: {
    type: String,
    enum: ['brown', 'black', 'gray', 'white', 'red'],
    required: 'Pet coat color is required.',
  },
  gender: {
    type: String,
    enum: ['female', 'male'],
    required: 'Pet gender is required.',
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

function capitalize (val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
}

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;