/**
 *  Index Route
 */

const express = require('express')
const router = express.Router()
const data = require('../data.json');
const projects = data.projects;

router.get("/", (req,res,next) => {
    res.render('index', {
        "redirect": `./project`,
        projects
    });
    next(req.params.id);
});

module.exports = router;