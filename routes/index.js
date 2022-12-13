/**
 *  Index Route
 */

const express = require('express')
const router = express.Router()
const data = require('../data.json');
const projects = data.projects;

router.get("/", (req,res) => {
    res.render('index', {
        "redirect": `./project`,
        projects
    });
});

module.exports = router;