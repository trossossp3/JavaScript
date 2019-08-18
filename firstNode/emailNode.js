var nodemailer = require('nodemailer');
var CronJob = require('cron').CronJob;
var dt = require('./myfirstmodule');
var to = 'jnarayan@bayviewglen.ca';
var from = 'nodejs74@gmail.com';
var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
      user: from,
      pass: 'NODEJSLIB'

    }
});

var mailOptions = {
    from: from,
    to: to,
    
    subject: 'email every second',
    html: '<body> <p1><font size="15">x^2+7x-6</font></p1> <br> <p2> are you enjoying this</p2></body>', 
  
   
    //html: '<h1><b1> Hello Jusin</h1></b1> <p>I made this an automated email for u mon-fri at 9: 30 u might not get it if the server isnt on. its only one a day so ull be ok. was u get this plz respond to my bvg email</p>',
    /*attachments: [
        {   // file on disk as an attachtment
            filename: 'geoIsp2.docx',
            path: 'C:\\Users\\trossos\\Documents\\geoIsp2.docx' // stream this file
        }
    ]*/
};
var numberOfEmails = 1;
//new CronJob('00 46 9 * * 1-5', function () {
new CronJob('* * * * * *', function(){  
transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            from = 'nodejs72@gmail.com'
        } else {
            console.log('Email sent at:  ' + dt.myDateTime() + "\n" + info.response + "\n" + numberOfEmails + " to " + to);
            console.log(from);
            numberOfEmails++;
        }
    });


    
}, null, true, 'America/New_York');
