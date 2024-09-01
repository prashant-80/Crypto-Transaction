const { TransactionRepository, EtheriumRepository } = require('../repository');
const transactionRepository = new TransactionRepository();
const etheriumRepository = new EtheriumRepository();

async function calculateExpenses(address) {
    const transactions = await transactionRepository.findByAddress(address);
    if (!transactions || !transactions.transactions || transactions.transactions.length === 0) {
        throw new Error('No transactions found for this address');
    }
    console.log(`Found ${transactions.transactions.length} transactions for address ${address}`);

    let totalExpenses = 0;
    for (const tx of transactions.transactions) {
        try {
            const gasUsed = Number(tx.gasUsed || '0');
            const gasPrice = Number(tx.gasPrice || '0');
            const expense = (gasUsed * gasPrice) / 1e18;
            totalExpenses += expense;
        } catch (error) {
            console.error(`Error processing transaction ${tx.hash}:`, error);
        }
    }
    console.log('Total expenses:', totalExpenses.toFixed(18));

    const latestEtherPrice = await etheriumRepository.getLatestPrice();
    const currentEtherPrice = latestEtherPrice ? latestEtherPrice.price : null;

    return {
        totalExpenses: totalExpenses.toFixed(18),
        currentEtherPrice
    };
}

module.exports = {
    calculateExpenses
};

