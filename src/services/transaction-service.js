const { TransactionRepository } = require('../repository');
const axios = require('axios');
const AppError = require('../utils/errors/app-error');
const transactionRepository = new TransactionRepository();

async function createTransaction(data) {
    try {
        const transaction = await transactionRepository.create(data);
        return transaction;
    } catch (error) {
        throw new AppError('Error creating transaction', 500);
    }
}

async function getTransactions(address) {
    try {
        let transactions = await transactionRepository.findByAddress(address);
        
        if (!transactions) {
            const response = await axios.get(`https://api.etherscan.io/api`, {
                params: {
                    module: 'account',
                    action: 'txlist',
                    address: address,
                    startblock: 0,
                    endblock: 99999999,
                    sort: 'desc',
                    apikey: process.env.ETHERSCAN_API_KEY
                }
            });

            if (response.data.status !== '1') {
                throw new AppError('Error fetching transactions from Etherscan', 500);
            }

            const fetchedTransactions = response.data.result.map(tx => ({
                hash: tx.hash,
                from: tx.from,
                to: tx.to,
                value: tx.value,
                gasUsed: tx.gasUsed,
                gasPrice: tx.gasPrice,
                timestamp: new Date(tx.timeStamp * 1000)
            }));

            transactions = await transactionRepository.create({ address, transactions: fetchedTransactions });
        }

        return transactions;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('Error fetching transactions', 500);
    }
}

module.exports = {
    createTransaction,
    getTransactions
}
