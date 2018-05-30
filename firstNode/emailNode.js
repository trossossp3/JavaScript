var nodemailer = require('nodemailer');
var CronJob = require('cron').CronJob;
var dt = require('./myfirstmodule');
var to = ['trossos@bayviewglen.ca'/*'jnarayan@bayviewglen.ca',*/ /*'zvelshi@bayviewglen.ca'*/];
var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'trossos@bayviewglen.ca',
 

    }
});

var mailOptions = {
    from: 'nodejs72@gmail.com',
    to: to,
    
    subject: 'Clark Library soon closing for the summer',
    html: '<body><p>Hello Mr. Clark,</p><p>Hope that you have doing well.</p><p>&ldquo;Pleasure and action make the hours seem short.&rdquo; &ndash; William Shakespeare. This was the first thing that came to mind when I saw your email about the closing of the Clarkbary library. Atlas, it has been a whole year since the fond memories of packing thousands of books into boxes last year.</p> <p>I am mumbled by the mere thought of participating in the Clarkbary second annual pack-athon. </p><p>I should be primed and ready to go after my final exam which is next Wednesday. I wish I could pack earlier but I fear the conversation I would have with my parents when they discover my Spanish mark decline was another victim of the Clarkbary library.</p><p>Thanks,<br>Trent</p> <p>Trent Rossos<br>World Champion<br>Porfessional Book Packer<br>Public Website Possessor <a href="https://trossossp3.github.io"></a><br>World Class English Expert<br>Exam Procrastinator <br>Wolfman Puck<br></p></body>',
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
        } else {
            console.log('Email sent at:  ' + dt.myDateTime() + "\n" + info.response + "\n" + numberOfEmails);
            numberOfEmails++;
        }
    });


    
}, null, true, 'America/New_York');
