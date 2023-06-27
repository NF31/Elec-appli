const nodemailer = require('nodemailer');
require('dotenv').config();

const monMdp = process.env.MON_MDP;
const monMail = process.env.MON_MAIL;

exports.getIndex = (req, res, next)=>{
    res.render('index')
}
exports.postIndex = (req, res, next)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: monMail,
          pass: monMdp
        },
        tls: true
        });
      
        const mailOptions = {
          from: req.body.email,
          to: monMail,
          subject: `Devis de ${req.body.nom}`,
          html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@400;500;600;700&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet">
                </head>
                <body>
                <div style="    
                font-family: 'Roboto', sans-serif;
                background-color: #323232;
                color: white; padding: 50px 0">
                    <h1 style="padding: 25px 0; text-align: center;">Devis de ${req.body.nom}</h1>
                    <p style="display: block; line-height: 150%;
                    margin: 25px auto; text-align: center; font-size: 18px;">${req.body.message}</p>   
                    <p style="display: block; line-height: 150%;
                    margin: 25px auto; text-align: center; font-size: 18px;"> Numéro de téléphone de ${req.body.nom} : ${req.body.tel}</p>  
                    <p style="display: block; line-height: 150%;
                    margin: 25px auto; text-align: center; font-size: 18px;"> Email de ${req.body.nom} : ${req.body.email}</p>   
                </div>
                
                </body>
                </html>`
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Message envoyé: ' + info.response + ' contenue du message : ' + req.body.message + ' email : ' + req.body.email);
            res.render('index', {message_envoyer: 'Votre message a bien été envoyé !'});
          }
        });
}