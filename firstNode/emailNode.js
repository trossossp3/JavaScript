var nodemailer = require('nodemailer');
var CronJob = require('cron').CronJob;
var to = 'trossos@bayviewglen';

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
    subject: 'dw bout it',
    html: '<h1><b1> Hello Commrad</h1></b1> <p>you have been selected for a free oportunity. fly to russia to get your prize</p>',
    /*attachments: [
        {   // file on disk as an attachment
            filename: 'geoIsp2.docx',
            path: 'C:\\Users\\trossos\\Documents\\geoIsp2.docx' // stream this file
        }
    ]*/
};

new CronJob('* * * * * *', function () {

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}, null, true, 'America/New_York');

