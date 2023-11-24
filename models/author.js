const mongoose  = require('mongoose'); 

const authorSchema = mongoose.Schema({
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    nat: { type: String, required: false },
    

});

module.exports = mongoose.model('Author' , authorSchema);