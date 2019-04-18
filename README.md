# movie-alert
(Out of the box code works for JazzCinemas chennai. Edit scrap.js to customize )

Get Telephone alert when the movie tickets open for Avengers End game.

# 4 step setup
1. Create AWS free account and Twilio trial account. Buy a phone number for free and note the twilio SID and authtoken
2. Open makecall.js and populate the values. The SID, authtoken, the number to which you want alert call and twilio phone number
3. Start a EC2 server in your free AWS account. SSH via your terminal. Clone this repo and run npm install. Ignore the error(if any)
4. Open the crontab and set a cron job something like this
```
* /10 * * * /root/.nvm/versions/node/v8.15.1/bin/node /home/ec2-user/apps/movie-alert/scrap.js >> /home/ec2-user/apps/movie-alert/movie.log
```

Sit back and relax. Twilio will send you a call once the end game opens. Customize code for further movies.
