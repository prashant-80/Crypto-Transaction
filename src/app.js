const express = require('express');
const app = express();
const connectDB = require('./config/db-config');
const apiRoutes = require('./routes');
const { ServerConfig } = require('./config');
const { errorHandler } = require('./middlewares');
const { startEtheriumPriceUpdates } = require('./services/etherium-service');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.use(errorHandler);

const port = process.env.PORT || ServerConfig.PORT;
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
  console.log('Connected to MongoDB');
  startEtheriumPriceUpdates();
});

