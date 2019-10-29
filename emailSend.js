process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
/*
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; 

[{ Error: self signed certificate in certificate chain
    at TLSSocket.onConnectSecure (_tls_wrap.js:1058:34)
    at TLSSocket.emit (events.js:198:13)
    at TLSSocket._finishInit (_tls_wrap.js:636:8) code: 'ESOCKET', command: 'CONN' }]

https://www.youtube.com/watch?v=FVi-m1qmJD0 [Do Less secure app access is on]
or
https://l.facebook.com/l.php?u=https%3A%2F%2Fmyaccount.google.com%2Flesssecureapps%3Ffbclid%3DIwAR1Qh50GLDEzPe7xxCBo-F8-j6ma3_Q5VCyBUK-cMY660qozXSfX1_fvGBY&h=AT1g_K79kfDK2ggbbicF0he3ZAzuiYZBu1QsVArPNUHIuuQFXJSj8xCMaCNSSzhZqaBEWjYrfhZbtrLW0Gv8PBEqcMrVzn84ffFRkTk6qcLjCLfl8mUJkNAkyFStR-tBa6UPjw
[Do Less secure app access is on]
*/
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'user gmail',
        pass: 'your password'
    }
});
var mailOption = {
    from: 'user gmail',
    to:'client gmail',
    sub: 'sending email for using node.js',
    text: 'That was easy'
};
transporter.sendMail(mailOption, function(error,info){
    if(error) {
        console.log(error);
    }else{
        console.log('Email sent : ' + info.response);
    }
});
