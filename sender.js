const Nexmo = require('nexmo')
const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: '',
}, {debug: true})

const appPhoneNumber = ''

function sendMessage(text, toNumber) {
    nexmo.message.sendSms(
    appPhoneNumber, toNumber, text, {type: 'unicode'},
        (err, responseData) => {
            if (err) {
            console.log(err)
            } else {
            console.dir(responseData)
            // Optional: add socket.io -- will explain later
            }
        }
    )
}

module.exports = sendMessage