const express = require('express');
const router = express.Router();
const transactionRoutes = require('./transaction-routes.js');
const etheriumRoutes = require('./etherium-routes.js');


router.use('/transaction', transactionRoutes);
router.use('/etherium', etheriumRoutes);




module.exports = router;