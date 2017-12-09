const express = require('express');
const path = require('path');
const app = express();
// webpack middleware for dev

// all routes go above here
app.get('/hello',(req,res)=> res.send({'hi':'there'}))

if(process.env.NODE_ENV !== 'production') {
    // webpack setting only if in prod
    console.log('running dev')
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');    
    app.use(webpackMiddleware(webpack(webpackConfig)));    
} else {
    console.log('production')
    // this is for production....what if we have multible pages , or react router hold everything ?? 
    // react router will take care of anythiong else
    app.use(express.static('dist'))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'dist/index.html'))
    })
}
// for production
app.listen(process.env.PORT||3050,()=> console.log('Running'));
