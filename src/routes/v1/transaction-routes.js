const express = require('express');
const router = express.Router();
const { TransactionController } = require('../../controller');
const { validateAddress } = require('../../middlewares');

router.get('/:address', validateAddress, TransactionController.getTransactions);

module.exports = router;