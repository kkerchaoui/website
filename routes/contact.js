var express = require('express');
var router = express.Router();
var nodeMailer = require('nodemailer');
const creds = require('../config/config');



router.post('/', function (req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: creds.USER,
        pass: creds.PASS
      }
    });
    mailOpts = {
      from: req.body.name,
      to: 'khelil.k@gmail.com',
      subject: 'Site - Nouveau message de '+ req.body.name,
      text: `Nom: ${req.body.name}\nMail: ${req.body.email}\nTel: ${req.body.tel} \n \n ${req.body.content}`
    };
  
    smtpTrans.sendMail(mailOpts, function (error) {
      if (error) {
        res.send({
          msg: 'fail'
        })
      }
      else {
        res.send({
          msg: 'success'
        })
      }
    });
  });

module.exports = router;
