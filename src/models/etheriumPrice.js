const mongoose = require('mongoose');

const etheriumPriceSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('EtheriumPrice', etheriumPriceSchema);
