const { ErrorResponse } = require('../utils/common');
const  AppError = require('../utils/errors/app-error');

function errorHandler(err, req, res, next) {
    if (err instanceof AppError) {
        ErrorResponse.error = err;
        return res.status(err.statusCode).json(ErrorResponse);
    }

    ErrorResponse.error = new AppError('Internal Server Error', 500);
    return res.status(500).json(ErrorResponse);
}

module.exports = errorHandler;
