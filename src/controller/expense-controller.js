const { expenseService } = require('../services');

async function getExpenses(req, res) {
    try {
        const { address } = req.params;
        const result = await expenseService.calculateExpenses(address);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getExpenses
};