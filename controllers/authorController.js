const Author = require('../models/author');

const createAuthor = async (req,res) =>{  
    try {
        const author =  await Author.create({
            ...req.body
          });
        res.status(201).json(author)
    } catch (error) {
        res.status(500).json({message : error.message})
    }

}

module.exports = {
    createAuthor,    
}