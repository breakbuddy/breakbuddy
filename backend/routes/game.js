const express = require('express');
const router = express.Router();

const gameController = require('../controllers/game')

router.get('/', gameController.result);

module.exports = router;