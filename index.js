const express = require('express');
const app = express();
const path = require('path');
//const mongoose = require('mongoose');
const port = process.env.PORT || 2999;

//mongoose.connect('mongodb://localhost/evalZino');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    next();
});

//liste des topics disponibles
app.get('/topics', function(req, res) {
    console.log(forum)
    res.send(forum);
});

//Liste des messages dans le topic :id
app.get('/topics/:id', function(req, res) {
    res.send("Oui")
});

//Contenu du message :mid dans le topic :id
app.get('/topics/:id/:mid', function(req, res) {
    res.send("Oui")
});

app.post('/topics/new', function(req, res) {
    console.log("oui")
});

//Nouveau message dans le topic :id
app.post('/topics/:id/new', function(req, res) {
    res.send("Oui")
});

app.listen(port, "192.168.43.224",  () => console.log(`App listening on 192.168.43.224:${port}`));

var forum = [
    {
        id : "1",
        title : "Quel est votre animal Préféré ?",
        messages : [
            {
                id : "1",
                content : "Moi j'adore les loups ! *.*"
            },
            {
                id : "2",
                content : "Moi les chats ! :O Better than everything omg :O"
            },
            {
                id : "3",
                content : "Moi j'aime bien Adama :D Sacrée bestiole !"
            }
        ]
    },
    {
        id : "2",
        title : "Quel est votre professeur préféré ?",
        messages : [
            {
                id : "1",
                content : "Zino ofc !"
            },
            {
                id : "2",
                content : "Y a pas meilleur que Zino ! Qui oserait dire le contraire ? :O"
            }
        ]
    }
];
