var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'nodejs72@gmail.com',
        pass: 'Nodeyboi'

    }
});

var mailOptions = {
    from: 'nodejs72@gmail.com',
    to: 'trossos@bayviewglen.ca',
    subject: 'dw bout it',
    html: '<p>this was an automated email from a server i made i was just trying it. if u got it inform me</p><h1>this is something i am trying</h1>',
    attachments: [
        {   // file on disk as an attachment
            filename: 'geoIsp2.docx',
            path: 'C:\\Users\\trossos\\Documents\\geoIsp2.docx' // stream this file
        }
    ]
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
}); 