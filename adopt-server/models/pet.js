const mongoose = require('mongoose');
const dogBreeds = require('../public/assets/data/dogs.json');

const COLORS = ['Brown', 'Black', 'Gray', 'White', 'Red'];
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
    set: capitalize,
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
  img: {
    type: String,
    validate: {
      validator: function(filename) {
        if (!filename) return;
        return (/\.(bmp|jpeg|jpg|png|tiff)$/i).test(filename);
      },
      message: 'File provided not valid.'
    }
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

petSchema.statics.paginate = function(currentPage) {
  const limit = 12;
  const skip = (currentPage - 1) * limit;
  let totalCount;

  // count documents
  this.count({})
    .then(count => totalCount = count)
    .catch(err => {
      totalCount = 0;
      next(err);
    });

  // get paginated documents
  return this.find({})
    .limit(limit)
    .skip(skip)
      .then(data => {
        const result = {
          totalCount,
          currentPage,
          data
        };
        return result;
      })
      .catch(err => next(err));
}

function capitalize(val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
}

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;