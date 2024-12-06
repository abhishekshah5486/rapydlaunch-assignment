const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.error(err);
    })
}

module.exports = connectDB;