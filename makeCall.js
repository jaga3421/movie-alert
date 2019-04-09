const accountSid = 'AC7a96edd461700342fd73d545d8dca81f',
    authToken = '8a672f33c64641c7340d75a57ae1ec56',
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