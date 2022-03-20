// import {nodemailer} from "nodemailer"
// import { google } from "googleapis"

// export async function SendEmail(to, count) {
//     let mailOptions = null;
//     const oAuth2Client = new google.auth.OAuth2(
//         "350920836869-tem8btjvvod2250p635reibe68jolivo.apps.googleusercontent.com",
//         "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",
//         "https://developers.google.com/oauthplayground"
//       );


//       oAuth2Client.setCredentials({ refresh_token: "1//04Q4t6FTFjS3DCgYIARAAGAQSNwF-L9Ir2KmDPEUXq3WPFZUEWCgXWbqqOnnEte9TFklTxqHKIqUgPRVJtk5GlwDWkadhdzj9g94"});
//         const accessToken = await oAuth2Client.getAccessToken();

//         const transport = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: "recruitauto99@gmail.com",
//                 clientId: "350920836869-tem8btjvvod2250p635reibe68jolivo.apps.googleusercontent.com",
//                 clientSecret: "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",
//                 refreshToken: "1//04Q4t6FTFjS3DCgYIARAAGAQSNwF-L9Ir2KmDPEUXq3WPFZUEWCgXWbqqOnnEte9TFklTxqHKIqUgPRVJtk5GlwDWkadhdzj9g94",
//                 accessToken: accessToken
//             }
//         });

//                mailOptions = {
//                     from: "recruitauto99@gmail.com",
//                     to: to,
//                     subject: "Test Result",
//                     html: count,
//                 };
//             const result = await transport.sendMail(mailOptions);
//             return result;
    
// }