const express = require('express');
const router = express.Router();
const data = require('../data.json');
const projects = data.data;

router.get("/", (req,res) => {
    res.render('about',{projects});
})

module.exports = router;