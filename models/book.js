const mongoose  = require('mongoose'); 

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    subject: { type: String, required: true },
    imageUrl: { type: String, required: false },
    author: { type: String, required: true },
    price: { type: Number, required: true },

});

module.exports = mongoose.model('Book' , bookSchema);