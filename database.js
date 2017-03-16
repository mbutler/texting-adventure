const MongoClient = require('mongodb').MongoClient
const mongoConnection = ''
let db

function insertDocument(collectionName, obj) {
    MongoClient.connect(mongoConnection, (err, database) => {
        if (err) return console.log(err)
        db = database

        db.collection(collectionName).save(obj, function(err, results) {
            if (err) return console.log(err)

            console.log('saved to database')
        })     
    })
}

function updateMappingStatus(obj) {
    MongoClient.connect(mongoConnection, (err, database) => {
        if (err) return console.log(err)
        db = database

        db.collection('users').update(
            {user: obj.user},
            {$set: {
                mapping: obj.mapping
            }}
            )            

        console.log('updated')           
    })
}

module.exports = {
    insertDocument,
    updateMappingStatus
}



