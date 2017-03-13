const moment = require('moment')
const parser = require('./parser')
const sendMessage = require('./sender')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
let db
const mongoConnection = ''

MongoClient.connect(mongoConnection, (err, database) => {
    if (err) return console.log(err)
    db = database
    //console.log(db)
    app.listen(3001, () => {
        console.log('listening on 3001')
    })
})

app.get('/', (req, res) => {
    
    let unix_time = moment.utc(req.query['message-timestamp']).unix()

    let messageObj = {
         inbound: req.query.msisdn,
         receiver: req.query.to,
         messageId: req.query.messageId,
         timestamp: unix_time,
         text: req.query.text,
         keyword: req.query.keyword
     }

     let sendText = parser(messageObj)

     sendMessage(sendText, '13199361339')

     insertDocument('rooms', messageObj)
     res.sendStatus(200)

})

function insertDocument(collectionName, obj) {    
    db.collection(collectionName).save(obj, function(err, results) {
        if (err) return console.log(err)

        console.log('saved to database')
    })
}