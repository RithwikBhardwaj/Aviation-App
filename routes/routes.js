//dependencies
const express = require('express');
const router = express.Router();

//push server response to routeHelper.js
const routeHelper = require('./routeHelper.js');

router.route('/')
  .post(routeHelper.find);

  module.exports = router;