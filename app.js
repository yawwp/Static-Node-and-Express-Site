//Requirements for using express
const express = require('express');
const bodyParser = require('body-parser');
const router = require('router');

//Creating the application using express
const app = express();

//Setting the pug view engine
app.set('view engine', "pug");

//Creating public static page 
app.use(express.static('public'));
app.use('/static', express.static('public'));

//Setting routes for express site 
const mainRoutes = require('./routes/index');
const aboutRoute = require('./routes/about')
const projectRoute = require('./routes/project');

//Using routes and pointing them to routes folders
app.use(mainRoutes);
app.use('/about',aboutRoute);
app.use('/project', projectRoute);


//404 error handler
app.use((req,res,next)=> {
    const err = new Error("Page Not Found")
    err.status = 404
    next(err)
})

//global error handler
app.use((err,req,res,next) => {
    res.status(err.status || 500)
    if (err.status === 404){
        console.log(`You have a: "${err}" error`);
        res.render('page-not-found',{
            error:{
                status: err.status,
                message: err.message
            }
        }) 
    } else {
        console.log(`You have a: "${err}" error`);
        res.render('error',{
        error:{
            status: 500,
            message: err.message
        }
    })}
})

//Running application on port 3000
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});