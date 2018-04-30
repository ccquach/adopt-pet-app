const express = require('express'),
      router  = express.Router(),
      helpers = require('../helpers/pets');

router.route("/")
  .get(helpers.getPets)
  .post(helpers.addPet);

router.route("/:id")
  .get(helpers.getPet)
  .put(helpers.updatePet)
  .delete(helpers.deletePet);

module.exports = router;