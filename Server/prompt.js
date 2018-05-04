// //
var http = require('http');
var pdf = require('html-pdf');

const PORT = 8765;

var server = http.createServer((req, res) => {

    var html = '<html><head><title>PDF Test</title></head><body><h1>Welcome</h1><p>This is a test to see if we can get <b>PDF generation</b> to work on the server side.</p><p>PDF files can be very tricky to do on the server so this will take a bit of <u>hit and trail</u> before we can be confident it works fine.</p></body></html>';

    pdf.create(html).toStream((err, stream) => {

        if (err) {

            console.error(err);
            res.status(500);
            res.end(JSON.stringify(err));

            return;
        }

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=test-file.pdf;');

        stream.pipe(res);
    });
});

server.listen(PORT, () => {
    console.log('Server listening on Port: %s', PORT);
});