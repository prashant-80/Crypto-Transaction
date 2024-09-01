const ethUtil = require('ethereumjs-util');

function validateAddress(req, res, next) {
    const { address } = req.params;
    
    if (!address) {
        return res.status(400).json({ error: 'Address is required' });
    }

    if (!ethUtil.isValidAddress(address)) {
        return res.status(400).json({ error: 'Invalid Ethereum address' });
    }

    next();
}

module.exports = validateAddress;
