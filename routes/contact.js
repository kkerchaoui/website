const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');
const creds = require('../config/config');
const request = require('request');

router.post('/', function (req, res) {
  if (req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
    return res.json({
      responseError: "Please select captcha first"
    });
  }

  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + creds.SECRET_KEY + "&response=" + req.body.captcha;

  request(verificationURL, function (error, response, body) {
    body = JSON.parse(body);

    if (body.success !== undefined && !body.success) {
      return res.json({
        responseError: "Failed captcha verification"
      });
    }

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
      to: creds.USER,
      subject: 'Site - Nouveau message de ' + req.body.name,
      text: `Nom: ${req.body.name}\nMail: ${req.body.email}\nTel: ${req.body.tel} \n \n ${req.body.content}`
    };

    smtpTrans.sendMail(mailOpts, function (error) {
      if (error) {
        res.json({
          responseError: 'Oops something went wrong'
        })
      } else {
        res.json({
          responseSuccess: 'Thanks for your message <br> I\'ll get back to you shortly !'
        })
      }
    });
  });
});

module.exports = router;