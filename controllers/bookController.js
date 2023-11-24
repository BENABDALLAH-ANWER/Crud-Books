const Book = require('../models/book');
const Author = require('../models/author');

const createBook = async (req,res) =>{  
    try {
        const author_id =req.params.id 
        const categ_id =req.params.id1 
        const {title , subject , price  } = req.body 
       

        const au = await Author.findById(author_id) ;
        if ( !au ){
            res.status(400).json({message:"ID AUTHOR EST INVALIDE"})
        }

        const cat = [] 
        cat.push(categ_id)


        const book =  await Book.create({
            title , 
            subject , 
            price , 
            author : author_id , 
            categs  : cat
          });
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({message : error.message})
    }

}

const getBookById = async (req,res) =>{  
    try {
        const book_id =req.params.id 
      const book =   await Book.findById(book_id).populate('author').populate('category').exec() ; 
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({message : error.message})
    }

}



 
  const updateBookById = (req, res) => {
   Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
     .then(() => res.status(200).json({ message: 'Objet modifié !'}))
     .catch(error => res.status(400).json({ error }));
 };
 
 const deleteBookById = (req, res, next) => {
   Book.deleteOne({ _id: req.params.id })
     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
     .catch(error => res.status(400).json({ error }));
 };

 const getBooksByIdAuthor = async (req, res) => {
    const authorId = req.params.id;
      try{
        const books = await Book.findByAuthor(authorId);
        res.status(201).json(books)
      }catch (error) {
        res.status(500).json({message : error.message})
    }
  };




module.exports = {
    createBook,
    updateBookById , 
    deleteBookById ,
    getBookById , 
    getBooksByIdAuthor

}