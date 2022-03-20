const nodemailer = require('nodemailer');
const {google} = require('googleapis');
var handlebars = require('handlebars');
var fs = require('fs');
var ejs = require('ejs');


const SendEmail = async(to, count) => {
    let result = null;
    let mailOptions = null;
    const oAuth2Client = new google.auth.OAuth2(
        "350920836869-tem8btjvvod2250p635reibe68jolivo.apps.googleusercontent.com",
        "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",
        "https://developers.google.com/oauthplayground"
      );


      oAuth2Client.setCredentials({ refresh_token: "1//04Q4t6FTFjS3DCgYIARAAGAQSNwF-L9Ir2KmDPEUXq3WPFZUEWCgXWbqqOnnEte9TFklTxqHKIqUgPRVJtk5GlwDWkadhdzj9g94"});
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: "recruitauto99@gmail.com",
                clientId: "350920836869-tem8btjvvod2250p635reibe68jolivo.apps.googleusercontent.com",
                clientSecret: "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",
                refreshToken: "1//04Q4t6FTFjS3DCgYIARAAGAQSNwF-L9Ir2KmDPEUXq3WPFZUEWCgXWbqqOnnEte9TFklTxqHKIqUgPRVJtk5GlwDWkadhdzj9g94",
                accessToken: accessToken
            }
        });

        await ejs.renderFile(process.cwd() + "/response.ejs", { count : count}, function (err, data) {
            if (err) {
                console.log(err);
                return null;
            } else {
                mailOptions = {
                    from: "recruitauto99@gmail.com",
                    to: to,
                    subject: "Test Result",
                    html: data,
                };
                return data;
            }
            
            });

            result = await transport.sendMail(mailOptions);
            
    return result;
}

module.exports = SendEmail;