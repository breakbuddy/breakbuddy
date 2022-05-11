const express = require('express');
const router = express.Router();

const gameController = require('../controllers/game')

router.get('/', gameController.result);

router.post('/g', gameController.answer);

module.exports = router;