const express = require('express');
const router = express.Router();
const transactionRoutes = require('./transaction-routes.js');

router.use('/transaction', transactionRoutes);




module.exports = router;