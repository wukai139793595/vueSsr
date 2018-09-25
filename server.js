
const path = require('path');
const express = require('express');
const ssr = require('vue-server-renderer');
const fs = require('fs');
const createApp = require('./dist/bundle.server')['default'];
var clienturl = '/bundle.client.js'
// const Vue = require('vue');
var server = express();
server.use('/', express.static(__dirname + '/dist'));
// var app  = new Vue({
//     data: {
//         msg: 'I am vue data!'
//     },
//     template: `<div>I am vue template and <h3>{{msg}}</h3></div>`
// })
var render = ssr.createRenderer({
    template: fs.readFileSync('./index.html', 'utf-8')
})
server.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})
server.get('/api/getValue', (req, res) => {
    res.end('hello')
})
server.get('*', (req , res) => {
    let config = {url:req.url};
    createApp(config).then((app) => {
        render.renderToString(app, {
            init: `<script src=${clienturl}></script>`
        }, (err, html) => {
            res.end(html)
        })
    })
    // render.renderToString(app, (err, html) => {
    //     res.end(html);
    // })
})

