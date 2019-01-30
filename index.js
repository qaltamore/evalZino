const express = require('express');
const app = express();
const path = require('path');
//const mongoose = require('mongoose');
const port = process.env.PORT || 2999;

//mongoose.connect('mongodb://localhost/evalZino');

var forum = [
    {
        idTopic : "1",
        nameTopic : "Quel est votre animal Préféré ?",
        messagesTopic : [
            {
                idMessage : "1",
                contentMessage : "Moi j'adore les loups ! *.*"
            },
            {
                idMessage : "2",
                contentMessage : "Moi les chats ! :O Better than everything omg :O"
            },
            {
                idMessage : "3",
                contentMessage : "Moi j'aime bien Adama :D Sacrée bestiole !"
            }
        ]
    },
    {
        idTopic : "2",
        nameTopic : "Quel est votre professeur préféré ?",
        messagesTopic : [
            {
                idMessage : "1",
                contentMessage : "Zino ofc !"
            },
            {
                idMessage : "2",
                contentMessage : "Y a pas meilleur que Zino ! Qui oserait dire le contraire ? :O"
            }
        ]
    }
];

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
