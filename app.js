const express = require('express');
const bodyParser = require('body-parser');
const router = require('router');

const app = express();
app.set('view engine', "pug");
app.use(express.static('public'));
app.use('/static', express.static('public'));

const mainRoutes = require('./routes/index');
const aboutRoute = require('./routes/about')
const projectRoute = require('./routes/project');

app.use(mainRoutes);
app.use('/about',aboutRoute);
app.use('/project', projectRoute);

app.use((req,res,next)=> {
    const err = new Error("Page Not Found")
    err.status = 404
    next(err)
})

app.use((err,req,res,next) => {
    res.status(err.status || 500)
    if (err.status === 404){
        res.render('page-not-found',{
            error:{
                status: err.status,
                message: err.message
            }
        }) 
    } else {res.render('error',{
        error:{
            status: 500,
            message: err.message
        }
    })}
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});