const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const emailConfig = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }   
}
module.exports = emailConfig;