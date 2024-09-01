const Transaction = require('../models/transaction');

class TransactionRepository {
    constructor() {
      this.model = Transaction;
    }

    async create(data) {
        return this.model.findOneAndUpdate(
            { address: data.address },
            { $set: data },
            { upsert: true, new: true }
        );
    }

    async findByAddress(address) {
        const result = await this.model.findOne({ address });
        console.log('Transactions found in repository:', result);
        return result;
    }
}

module.exports = TransactionRepository;

