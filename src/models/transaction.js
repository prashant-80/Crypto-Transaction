const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    transactions: [{
        hash:String,
        from:String,
        to:String,
        value:Number,
        gasUsed:String,
        gasPrice:String,
        timestamp:Date
    }]
},{timestamp:true});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;