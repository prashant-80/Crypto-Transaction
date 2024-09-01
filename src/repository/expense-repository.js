const { Expense } = require('../models');

class ExpenseRepository {
    constructor() {
        this.model = Expense;
    }

    async findByAddress(address) {
        return this.model.find({ address });
    }

}

module.exports = ExpenseRepository;