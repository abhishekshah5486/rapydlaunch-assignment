const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoose');

dotenv.config();

const app = express();

app.use(express.json()); // Parses JSON payloads

connectDB();

const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});