const sendMessage = require('./sender')


function parser(textObj) {
    console.log("hello from the parser")
    console.log(textObj)
    let sendText = "I hear you! " + textObj.text

   return sendText
}

module.exports = parser

