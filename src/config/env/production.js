//production.js
const dotenv = require('dotenv');
dotenv.config();

const prodConfig = {
    //database
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  
  };
  
  
  export default prodConfig;