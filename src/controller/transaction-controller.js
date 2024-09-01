const { TransactionService } = require('../services');
const AppError = require('../utils/errors/app-error');
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function getTransactions(req, res) {
    try {
        const address = req.params.address;
        const transactions = await TransactionService.getTransactions(address);
        SuccessResponse.data = transactions;
        return res.status(200).json(SuccessResponse);
    } catch (error) {
        if (error instanceof AppError) {
            ErrorResponse.error = error;
            return res.status(error.statusCode).json(ErrorResponse);
        }
        ErrorResponse.error = new AppError('Internal Server Error', 500);
        return res.status(500).json(ErrorResponse);
    }
}

module.exports = {
    getTransactions
}