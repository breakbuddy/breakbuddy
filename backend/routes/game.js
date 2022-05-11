const express = require('express');
const router = express.Router();

const gameController = require('../controllers/game')

router.post('/', gameController.answer);

module.exports = router;