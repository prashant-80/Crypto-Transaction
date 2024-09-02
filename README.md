# Crypto API Service

This project is a Node.js API service for cryptocurrency-related operations, deployed on AWS Elastic Beanstalk.

## Deployed URL

The API is live at: http://crypto-api-env.eba-5peemqe3.ap-south-1.elasticbeanstalk.com/ {api endpoint}

## API Routes

### 1. Get Ethereum Price
- **Endpoint**: `/api/v1/etherium/price`
- **Method**: GET
- **Description**: Fetches the current price of Ethereum in INR.
- **Response**: JSON object containing the current Ethereum price.
  
  <img width="846" alt="Screenshot 2024-09-02 at 11 08 35 PM" src="https://github.com/user-attachments/assets/3b998cc6-473b-4884-929d-3e68cbdd0328">



### 2. Get Transactions
- **Endpoint**: `/api/v1/transaction/:address`
- **Method**: GET
- **Description**: Retrieves transactions for a given Ethereum address.
- **Parameters**: 
  - `address`: Ethereum address (required)
- **Response**: JSON object containing transaction details.
  
  <img width="891" alt="Screenshot 2024-09-02 at 11 10 42 PM" src="https://github.com/user-attachments/assets/72c9b151-8a74-47f7-b267-98a92a6cbc61">


### 3. Get Expenses
- **Endpoint**: `/api/v1/expense/:address`
- **Method**: GET
- **Description**: Calculates and returns the expenses for a given Ethereum address.
- **Parameters**: 
  - `address`: Ethereum address (required)
- **Response**: JSON object containing expense details.
  
  <img width="1094" alt="Screenshot 2024-09-02 at 11 09 06 PM" src="https://github.com/user-attachments/assets/4e59ec94-62a7-4ceb-962f-57b3dc1acb53">


## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with necessary environment variables (see `.env.example`)
4. Run the development server: `npm run dev`

## Docker

1. Build the Docker image: `docker build -t crypto-api .`
2. Run the Docker container: `docker run -p 3000:3000 crypto-api`

## Deployment

This project is deployed on AWS Elastic Beanstalk.

