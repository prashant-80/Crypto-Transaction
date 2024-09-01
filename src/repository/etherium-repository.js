const { EtheriumPrice } = require('../models');

class EtheriumRepository {
    constructor() {
        this.model = EtheriumPrice;
    }

    async create(data) {
        return this.model.create(data);
    }

    async getLatestPrice() {
        return this.model.findOne().sort({ timestamp: -1 });
    }
}

module.exports = EtheriumRepository;
