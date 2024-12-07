const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoose');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json()); // Parses JSON payloads

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/admins', adminRoutes);
app.use('/users', userRoutes);

connectDB();

const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
    console.log(`Server is flying: http://localhost:${PORT}`);
});
