const express = require('express');
const router = express.Router();

const mutantController = require('../controllers/mutant');

router.post("/", mutantController.checkMutant);

module.exports = router;