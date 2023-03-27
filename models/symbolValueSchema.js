let mongoose = require('mongoose');

let symbolValueSchema = new mongoose.Schema({
    symbol: String,
    value: Number,
    scrapedAt: Date
});
  

module.exports = mongoose.model('symbolValue', symbolValueSchema);