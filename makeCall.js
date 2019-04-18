const accountSid = '###',
    authToken = '###',
    myPhone = '+91####',
    TwilioPhone = '+1####';


const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = function(){
    client.calls
        .create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            to: myPhone,  // Call this number
            from: TwilioPhone // From a valid Twilio number
        })
        .then(call => console.log(call.sid));
}
