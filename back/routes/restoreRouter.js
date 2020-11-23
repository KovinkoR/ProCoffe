/* eslint-disable no-console */
import express from 'express';
import nodemailer from 'nodemailer';
import generator from 'generate-password';
import bcrypt from 'bcrypt';

import User from '../models/userModel.js';

const router = express.Router();

router.post('/restoreApi', async (req, res) => {
  const newPassword = generator.generate({
    length: process.env.LENGTH_GENERATED_PASSWORD,
    numbers: true,
  });
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const { targetText } = req.body;
  const restoreUser = await User.findOneAndUpdate(
    { email: targetText }, { $set: { password: hashedPassword } }, { new: true }, (err, doc) => {
      if (err) {
        console.error('Не удалось обновить пароль пользователю', err);
      }
      console.error(doc, 'пароль пользователя успешно обновлен');
    },
  );
  const mail = restoreUser.email;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: 'coCoffee & co',
    to: mail,
    subject: 'Восстановление пароля',
    text: `Здравствуйте, ${restoreUser.username}! 
    Ваш новый пароль:    ${newPassword}
    Обновление по ссылке допилим чуть позже.
    Хорошего дня, мистер любитель хорошего кофе!`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.error(err);
    else console.error(`email sent${info.response}`);
  });

  res.json({ he: 'back' });
});

export default router;
