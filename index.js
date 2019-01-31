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
    console.log(topics)
    res.send(topics);
});

//Liste des messages dans le topic :id
app.get('/topics/:id', function(req, res) {
    var messages = getMessagesFromTopic(req.query.topicId)
    console.log(messages)
    res.send(messages)
});

//Contenu du message :mid dans le topic :id
app.get('/topics/:id/:mid', function(req, res) {
    res.send("Oui")
});

app.post('/topics/new', function(req, res) {
    var topicsLength = topics.length
    var title = req.query.title
    var topicsNewLength = topics.push({"id": topicsLength+1, 
                "title": title})
    if(topicsLength < topicsNewLength)
        res.send(true)
    else
        res.send(false)
});

//Nouveau message dans le topic :id
app.post('/topics/:id/new', function(req, res) {
    var messagesLength = messages.length
    var dateJ = new Date(Date.now()).toLocaleString()
    var messagesNewLength = messages.push({'topicId':parseInt(req.query.topicId), 
                    'messageId':messages.length+1,
                    'content':req.query.messageContent,
                    'date':dateJ})
    console.log(messages)
    if(messagesLength < messagesNewLength)
        res.send(true)
    else
        res.send(false)
});

function getMessagesFromTopic(topicId) {
    var messagesFromTopic = []
    for(var i = 0; i < messages.length; i++) {
        if(messages[i].topicId == topicId)
            messagesFromTopic.push(messages[i])
    }
    return messagesFromTopic
}

var topics = [
    {
        id : 1,
        title : "Quel est votre animal Préféré ?"
    },
    {
        id : 2,
        title : "Quel est votre professeur préféré ?"
    }
];

var messages = [
    {
        topicId : 1,
        messageId : 1,
        content : "Moi j'adore les loups ! *.*",
        date : "2019-1-30 14:34:04"
    },
    {
        topicId : 1,
        messageId : 2,
        content : "Moi les chats ! :O Better than everything omg :O",
        date : "2019-1-30 14:35:04"
    },
    {
        topicId : 1,
        messageId : 3,
        content : "Moi j'aime bien Adama :D Sacrée bestiole !",
        date : "2019-1-30 14:36:04"
    },
    {
        topicId : 2,
        messageId : 4,
        content : "Zino ofc !",
        date : "2019-1-30 14:38:04"
    },
    {
        topicId : 2,
        messageId : 5,
        content : "Y a pas meilleur que Zino ! Qui oserait dire le contraire ? :O",
        date : "2019-1-30 14:40:04"
    }
]

app.listen(port, "192.168.43.224",  () => console.log(`App listening on 192.168.43.224:${port}`));
