process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
/*
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

https://l.facebook.com/l.php?u=https%3A%2F%2Fmyaccount.google.com%2Flesssecureapps%3Ffbclid%3DIwAR1Qh50GLDEzPe7xxCBo-F8-j6ma3_Q5VCyBUK-cMY660qozXSfX1_fvGBY&h=AT1g_K79kfDK2ggbbicF0he3ZAzuiYZBu1QsVArPNUHIuuQFXJSj8xCMaCNSSzhZqaBEWjYrfhZbtrLW0Gv8PBEqcMrVzn84ffFRkTk6qcLjCLfl8mUJkNAkyFStR-tBa6UPjw
*/
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bepul.ru.cse@gmail.com',
        pass: 'beepul.cse.ru.96979892'
    }
});
var mailOption = {
    from: 'bepul.ru.cse@gmail.com',
    to:'bepul.cse.ru@gmail.com',
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