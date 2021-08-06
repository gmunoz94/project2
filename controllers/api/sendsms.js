require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);


client.messages.create({

    to: '+1 210 464 0710',
    from : '+1 210 750 3157',
    body: "sent from my desktop"
})
<<<<<<< HEAD
.then((message) => console.log(message.sid));

}

sendSMS('+12107105932', "This is what coding looks like")
=======
.then((message) => console.log(message.sid));
>>>>>>> 9ab53c2476d5444cfaf01e56897f8194ea35f6a4
