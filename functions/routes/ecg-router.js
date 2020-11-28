const express = require('express');
const router = express.Router();
const ecgController = require('../contollers/ecg-controller')

/* GET home page. */
router.post('/', ecgController.postECG);

module.exports = router;
