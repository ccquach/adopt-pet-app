// dotenv config
require('dotenv').config();

// set variables
const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      morgan     = require('morgan'),
      port       = process.env.PORT || 3000;

// require routes
const petRoutes = require('./routes/pets');

// app config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public/assets/data'));

// use routes
app.use('/api/pets', petRoutes);

// error handling
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

// start server
app.listen(port, function() {
  console.log(`Serving adopt pet app on port ${port}`);
});