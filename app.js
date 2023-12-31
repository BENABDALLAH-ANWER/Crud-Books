const express = require('express');
const mongoose  = require('mongoose');
const Book = require('./models/book');


const app = express();
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/books-db')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((e) => console.log('Connexion à MongoDB échouée !',e));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  app.post('/api/addBook', (req, res, next) => {
   delete req.body._id;
   const book = new Book({
     ...req.body
   });
   book.save()
     .then(() => res.status(201).json({ message: 'Objet enregistré !', object:book}))
     .catch(error => res.status(400).json({ error }));
 });

 app.get('/api/getBooks', (req, res, next) => {
   Book.find()
     .then(books => res.status(200).json(books))
     .catch(error => res.status(400).json({ error }));
 });

 app.get('/api/getBookById/:id', (req, res, next) => {
   Book.findOne({ _id: req.params.id })
     .then(book => res.status(200).json(book))
     .catch(error => res.status(404).json({ error }));
 });

 app.put('/api/updateBookById/:id', (req, res, next) => {
  Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/deleteBookById/:id', (req, res, next) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});







module.exports = app;