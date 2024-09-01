const express = require('express');
const router = express.Router();
const { ExpenseController } = require('../../controller');
const { validateAddress } = require('../../middlewares');

router.get('/:address', validateAddress, ExpenseController.getExpenses);

module.exports = router;