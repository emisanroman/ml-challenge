const express = require('express');
const router = express.Router();

const statsController = require('../controllers/stats');

router.get("/", statsController.getEstadistics);

module.exports = router;