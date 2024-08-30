const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    clientId: {
        type: String,
        required: true
    },
    clientSecret: {
        type: String,
        required: true
    },
    authUrl: String,
    tokenUrl: String,
    apiBaseUrl: String
});

const Platform = mongoose.model('Platform', platformSchema);

module.exports = Platform;
