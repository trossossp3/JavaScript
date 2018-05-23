var nodemailer = require('nodemailer');
var CronJob = require('cron').CronJob;
var dt = require('./myfirstmodule');
var to = ['jnarayan@bayviewglen.ca', /*'zvelshi@bayviewglen.ca'*/];
var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'nodejs72@gmail.com',
        pass: 'Nodeyboi'

    }
});

var mailOptions = {
    from: 'nodejs72@gmail.com',
    to: to,
    ReplyTo: 'jnarayan@bayviewglen.ca',
    subject: 'dw bout it',
    html: '<h1><b1> Hello Jusin</h1></b1> <p>I made this an automated email for u mon-fri at 9: 30 u might not get it if the server isnt on. its only one a day so ull be ok. was u get this plz respond to my bvg email</p>',
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
        } else {
            console.log('Email sent at:  ' + dt.myDateTime() + "\n" + info.response + "\n" + numberOfEmails);
            numberOfEmails++;
        }
    });


    
}, null, true, 'America/New_York');
