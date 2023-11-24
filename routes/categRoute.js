const express = require("express");
const router =express.Router() ;
const categController=require("../controllers/categController");



router.post("/addCateg",categController.createCateg)

module.exports= router