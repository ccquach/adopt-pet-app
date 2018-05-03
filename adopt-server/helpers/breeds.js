const db = require('../models');

exports.getDogBreeds = function(req, res, next) {
  db.Breed.find({ animal: "dog" })
    .then(breeds => res.json(breeds))
    .catch(err => next(err));
};

module.exports = exports;