// backend/config.js

require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'kishore1409',
    omdbApiKey: process.env.OMDB_API_KEY || 'a239a624',
};
