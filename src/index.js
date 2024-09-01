const express = require('express');
const app = express();
const connectDB = require('./config/db-config');
const apiRoutes = require('./routes');
const { ServerConfig } = require('./config');
const { errorHandler } = require('./middlewares');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.use(errorHandler);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
  await connectDB();
  console.log('Connected to MongoDB');
});