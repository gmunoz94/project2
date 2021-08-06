require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);

function sendSMS(recipientNumber,messageBody){

client.messages.create({

    to: recipientNumber,
    from : '+1 210 750 3157',
    body: messageBody

})
.then((message) => console.log(message.sid));

}

sendSMS('+12107105932', "This is what coding looks like")