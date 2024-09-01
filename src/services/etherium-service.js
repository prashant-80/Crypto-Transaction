const axios = require('axios');
const cron = require('node-cron');
const { EtheriumRepository } = require('../repository');
const AppError = require('../utils/errors/app-error');
const etheriumRepository = new EtheriumRepository();

async function getEtheruimPrice() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
        if (!response.data || !response.data.ethereum || !response.data.ethereum.inr) {
            throw new AppError('Invalid response from CoinGecko API', 500);
        }
        const price = response.data.ethereum.inr;
        await etheriumRepository.create({ price });
        console.log(`Ethereum price updated: ${price} INR`);
        return price;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        if (error.response) {
            throw new AppError(`Error fetching Ethereum price: ${error.response.status} ${error.response.statusText}`, 500);
        }
        throw new AppError('Error fetching Ethereum price', 500);
    }
}

function startEtheriumPriceUpdates() {
    cron.schedule('*/10 * * * *', async () => {
        try {
            const price = await getEtheruimPrice();
            console.log(`Ethereum price updated: ${price} INR`);
        } catch (error) {
            console.error('Error updating Ethereum price:', error.message);
        }
    });
    console.log('Ethereum price update scheduler started');
}

module.exports = {
    getEtheruimPrice,
    startEtheriumPriceUpdates
}
