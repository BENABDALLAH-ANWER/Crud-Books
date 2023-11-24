const express = require('express');
const mongoose  = require('mongoose');
const bookRoutes = require('./routes/bookRoute');
const authorRoutes = require('./routes/authorRoute');
const categRoutes = require('./routes/categRoute');





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

app.use("/api/books" , bookRoutes) ; 
app.use("/api/" , authorRoutes) ; 
app.use("/api/Categ/" , categRoutes) ; 

module.exports = app;