const express = require("express");
const router =express.Router() ;
const bookController=require("../controllers/bookController");



router.post("/addBook/:id/:id1",bookController.createBook)
router.get("/getBookById/:id",bookController.getBookById)
router.get("/getBookByIdAuthor/:id",bookController.getBooksByIdAuthor)
router.put("/updateBookById/:id",bookController.updateBookById)
router.delete("/deleteBookById/:id",bookController.deleteBookById)


module.exports= router