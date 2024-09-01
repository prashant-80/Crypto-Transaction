const express = require('express');
const router = express.Router();
const transactionRoutes = require('./transaction-routes.js');
const etheriumRoutes = require('./etherium-routes.js');
const expenseRoutes = require('./expense-routes.js');


router.use('/transaction', transactionRoutes);
router.use('/etherium', etheriumRoutes);
router.use('/expense', expenseRoutes);





module.exports = router;