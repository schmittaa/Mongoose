const mongoose = require('mongoose')
require('dotenv').config()
const server = '127.0.0.1:27017';
const database = 'firstdb';

const Database = async () => {

  try {
     await mongoose.connect(process.env.MONGO_DB)

    console.log('Database connection successful')
  }
  catch (err){
  console.error('Database connection error')
}
  }

module.exports = Database; 