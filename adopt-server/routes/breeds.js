const express = require('express'),
      router  = express.Router(),
      helpers = require('../helpers/breeds');

router.route("/dogs")
  .get(helpers.getDogBreeds);

module.exports = router;