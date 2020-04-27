const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    title: String,
    calories: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', ItemSchema);
