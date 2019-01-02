import express from 'express';
import path from 'path';

import {
  env,
  GitHubConfig,
  transporter
} from '../config/index';

let router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('Time: ', Date.now());

  next();
});

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });

router.get('/users', (req, res, next) => {
  const example = [{
      user1: 'User 1'
    },
    {
      user2: 'User 2'
    },
  ];

  res.json(example);
});

router.post('/contact', (req, res, next) => {
  const options = {
    from: `${req.body.email}`,
    to: 'info@rafaelmelon.es',
    subject: `📢 Mensaje enviado por ${req.body.name}`,
    text: `${req.body.notes}`,
    replyTo: `${req.body.email}`
  }

  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error);
      res.json('error');
    } else {
      console.log('Message sent: ' + info.response);
      res.json(info.response);
    };
  });
})

export default router;