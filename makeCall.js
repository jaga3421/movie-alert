const accountSid = 'XXXX',
    authToken = 'XXXXX',
    JagaPhone = '+918884268723',
    TwilioPhone = '+18063053046';


const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = function(){
    client.calls
        .create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            to: JagaPhone,  // Text this number
            from: TwilioPhone // From a valid Twilio number
        })
        .then(call => console.log(call.sid));
}