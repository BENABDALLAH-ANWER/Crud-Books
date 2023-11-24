const express = require("express");
const router =express.Router() ;
const bookController=require("../controllers/bookController");



/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/models/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/models/Book'
 *       500:
 *         description: Some server error
 *
 */
router.post("/addBook/:id/:id1",bookController.createBook)
router.get("/getBookById/:id",bookController.getBookById)
router.get("/getBookByIdAuthor/:id",bookController.getBooksByIdAuthor)
router.put("/updateBookById/:id",bookController.updateBookById)
router.delete("/deleteBookById/:id",bookController.deleteBookById)


module.exports= router