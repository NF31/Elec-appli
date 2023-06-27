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
          text: req.body.message
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