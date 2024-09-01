const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectDB() {
    try {
       
        const baseUri = process.env.MONGODB_URI.split('/').slice(0, -1).join('/');
        const dbName = 'assignment'; 
        const fullUri = `${baseUri}/${dbName}`;

        await mongoose.connect(fullUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB Atlas');
        console.log('Database name:', mongoose.connection.name);
        console.log('Host:', mongoose.connection.host);
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1);
    }
}

module.exports = connectDB;
