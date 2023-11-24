const Categ = require('../models/category');

const createCateg = async (req,res) =>{  
    try {
        const categ =  await Categ.create({
            ...req.body
          });
        res.status(201).json(categ)
    } catch (error) {
        res.status(500).json({message : error.message})
    }

}

module.exports = {
    createCateg,    
}