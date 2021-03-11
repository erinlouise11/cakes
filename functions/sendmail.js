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
        subject: `${data.name} Cool AF Cakes Email Submission`,
        html: `
            <h3>Message from ${data.name}<h3>
            <p>Email address ${data.email}<p>
            <p>Product type ${data.product}<p>
            <p>Event type ${data.event}<p>
            <p>Date of event ${data.date}<p>
            "<p>${data.message}<p>"
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

    transporter.sendMail({
        from: "erin.test.email@zohomail.com",
        to: `${data.email}`,
        subject: `Your Cool AF Cakes Email Submission`,
        html: `
            <h3>You sent an email to Cool AF Cakes<h3>
            <p>Product type ${data.product}<p>
            <p>Event type ${data.event}<p>
            <p>Date of event ${data.date}<p>
            <p>Your message was:<p>
            "<p>${data.message}<p>"
            <p>You may respond to this email<p>
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
