const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    },
    time: {
        type: Date,
        require: true,
        default: Date.now
    }
})
module.exports = Order = mongoose.model('orders', OrderSchema);