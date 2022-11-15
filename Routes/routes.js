const express = require('express')
const router = express.Router()
const fs = require('fs');
const accountRoutes = require('./account.js') // import account route
router.use(accountRoutes) 


router.get("/",(req,res)=>{
    res.send("home page")
})

router.get("/about",(req,res)=>{
    res.send("About page")
})

module.exports = router