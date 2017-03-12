const Nexmo = require('nexmo')
const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: '',
}, {debug: true})
const appPhoneNumber = ''

function parser(textObj) {
    console.log("hello from the parser")
    console.log(textObj)
    let sendText = "I hear you! " + textObj.text

   sendMessage(sendText, '')
}

function sendMessage(text, toNumber) {
    nexmo.message.sendSms(
    appPhoneNumber, toNumber, text, {type: 'unicode'},
        (err, responseData) => {
            if (err) {
            console.log(err)
            } else {
            console.dir(responseData)
            
            }
        }
    )
}

module.exports = parser