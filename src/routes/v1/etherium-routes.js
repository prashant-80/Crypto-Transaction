const express = require('express');
const router = express.Router();
const {EtheriumController} = require('../../controller');

router.get('/price', EtheriumController.getEtheruimPrice);

module.exports = router;