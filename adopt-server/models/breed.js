const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dogBreeds = require('../public/assets/data/dogs.json');
const DOG_BREEDS = { breeds: dogBreeds.dogs, animal: "dog" };

const breedSchema = new mongoose.Schema({
  breeds: [{
    type: String,
    required: true
  }],
  animal: {
    type: String
  }
});

const Breed = mongoose.model('Breed', breedSchema);

Breed.findOneAndUpdate(
  { animal: "dog" }, 
  { $set: DOG_BREEDS },
  { 
    new: true,
    upsert: true 
  }
)
  .then(res => console.log(`${res.breeds.length} breeds successfully stored.`))
  .catch(err => console.log(err));

module.exports = Breed;