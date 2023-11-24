const mongoose  = require('mongoose'); 

const categorySchema = mongoose.Schema({
    title: {
    type: String,
    enum: ['categ1', "categ2"] , 
    default:'categ1'
    } , 
    


} , {timestamps:true}

);

module.exports = mongoose.model('Category' , categorySchema);