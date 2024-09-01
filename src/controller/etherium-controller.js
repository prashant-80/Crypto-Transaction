const {etheriumService} = require('../services');
const AppError = require('../utils/errors/app-error');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function getEtheruimPrice(req, res) {
    try {
        const price = await etheriumService.getEtheruimPrice();
        SuccessResponse.data = { price };
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
    getEtheruimPrice
}