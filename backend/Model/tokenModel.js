const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    token: {
        type: string,
        required: true
    },

    userID: {
        type: String,
    }
})

module.exports = mongoose("Token", TokenSchema)