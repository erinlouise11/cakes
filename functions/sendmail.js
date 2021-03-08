const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        service: "Zoho",
        auth:{
            user: 'erin.test.email@zohomail.com',
            pass: 'Emailtester!',
        }
    });

    transporter.sendMail({
        from: "erin.test.email@zohomail.com",
        to: "erin.web.email.tester@gmail.com",
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
            if (error) {
                callback(error);
            } else {
                callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    'result': 'success'
                })
            });
        }
    });
}
