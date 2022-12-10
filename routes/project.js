const express = require('express')
const router = express.Router()
const data = require('../data.json');
const projects = data.projects;

router.get('/', (req,res) => {
    res.redirect('/:id', {projects})
})

router.get("/:id", (req,res) => {
    res.render('project', {
        name: projects[req.params.id].project_name,
        description:projects[req.params.id].description,
        technologies:projects[req.params.id].technologies,
        live:projects[req.params.id].live_link,
        github:projects[req.params.id].github_link,
        images:projects[req.params.id].images_urls
    });
})

module.exports = router;