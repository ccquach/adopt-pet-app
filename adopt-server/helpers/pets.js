const db = require('../models');

exports.getPets = function(req, res, next) {
  if (req.query.page) {
    // pagination
    db.Pet.paginate(req.query.page)
      .then(result => res.json(result))
      .catch(err => next(err));
  } else {
    // all
    db.Pet.find({})
      .then(pets => res.json(pets))
      .catch(err => next(err));
  }
};

exports.addPet = function(req, res, next) {
  db.Pet.create(req.body)
    .then(newPet => {
      return db.Pet.paginate(req.query.page)
        .then(result => res.status(201).json({
          newPet,
          result
        }))
        .catch(err => next(err));
    })
    .catch(err => next(err));
};

exports.getPet = function(req, res, next) {
  db.Pet.findById(req.params.id)
    .then(foundPet => res.json(foundPet))
    .catch(err => next(err));
};

exports.updatePet = function(req, res, next) {
  db.Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedPet => res.json(updatedPet))
    .catch(err => next(err));
};

exports.deletePet = function(req, res, next) {
  db.Pet.findByIdAndRemove(req.params.id)
    .then(() => {
      return db.Pet.paginate(req.query.page)
        .then(result => res.status(201).json({
          message: 'Pet deleted.',
          result
        }))
        .catch(err => next(err));
    })
    .catch(err => next(err));
};

module.exports = exports;