/* eslint-disable no-underscore-dangle */
import express from 'express';
import bcrypt from 'bcrypt';

import User from '../models/userModel.js';

const router = express.Router();

router.post('/registration', async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body.formData;
  let newUser;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    // .exact()
    req.session.user = newUser;
  } catch (error) {
    return res.json({ err: 'Пользователь уже существует или данные не верны!', error });
  }
  return res.json({
    id: newUser._id,
    login: newUser.username,
    email: newUser.email,
    status: 'ok',
    favorites: newUser.favorites,
    raited: newUser.raited,
    whishlist: newUser.whishlist,
  });
});

router.post('/login', async (req, res) => {
  let findUser;
  const {
    email,
    password,
  } = req.body;
  try {
    findUser = await User.findOne({ email });
    if (findUser && await bcrypt.compare(password, findUser.password)) {
      req.session.user = findUser;
    }
  } catch (error) {
    return res.json(error);
  }
  return res.json({
    id: findUser._id,
    login: findUser.username,
    email: findUser.email,
    status: 'ok',
    favorites: findUser.favorites,
    raited: findUser.raited,
    whishlist: findUser.whishlist,
  });
});

router.get('/logout', async (req, res) => {
  if (req.session.user) {
    await req.session.destroy();
    res.clearCookie('user_sid');
    return res.json({ message: 'ok' });
  }
  return res.json({ message: 'ne ok, не разлогинился' });
});

export default router;
