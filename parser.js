const sendMessage = require('./sender')
const database = require('./database')
let db

function parser(textObj) {
    let sendText = ''
    if (textObj.text == "start mapping") {
        sendText = startMapping(textObj.inbound)
    } else if (textObj.text == "stop mapping") {
        sendText = stopMapping(textObj.inbound)
    }

   return sendText
}

function startMapping(inbound) {
    console.log("mapping has begun for " + inbound)
    //insertDocument('users', {'user': inbound, 'mapping': true})
    database.updateMappingStatus({'user': inbound, 'mapping': true})
    
    //database update. create inbound if doesn't exist. set mapping: true
    return "Where are you?"
}

function stopMapping(inbound) {
    console.log("mapping is ending for " + inbound)
    //insertDocument('users', {'user': inbound, 'mapping': false})
    database.updateMappingStatus({'user': inbound, 'mapping': false})

    //database update. set mapping: false
    return "Have a great night"
}

module.exports = parser

