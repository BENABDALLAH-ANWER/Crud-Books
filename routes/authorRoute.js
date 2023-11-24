const express = require("express");
const router =express.Router() ;
const authorController=require("../controllers/authorController");



router.post("/addAuthor",authorController.createAuthor)

module.exports= router