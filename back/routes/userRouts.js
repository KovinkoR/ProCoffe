import express from 'express';
import Article from '../models/article.js';
import Coffee from '../models/coffee.js';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/articles', async (req, res) => {
  const imgs = await Article.find();
  res.status(200).json(imgs);
});

router.get('/topApi', async (req, res) => {
  const top = await Coffee.find();
  const sorted = top.sort((a, b) => b.av - a.av);
  const spliced = sorted.splice(0, 10);
  res.status(200).json(spliced);
});

router.post('/favoriteApi', async (req, res) => {
  const { id } = req.body;
  const userID = req.session.user._id;
  const itemToAdd = await Coffee.findById(id);
  if (!itemToAdd.userLiked.includes(userID)) {
    itemToAdd.userLiked.push(userID);
  } else {
    itemToAdd.userLiked.find((el, i) => {
      if (el === userID) {
        itemToAdd.userLiked.splice(i, 1);
      }
    });
  }

  await itemToAdd.save();
  res.status(200).json(itemToAdd);
});

router.post('/raiting', async (req, res) => {
  const { id, rate } = req.body;
  const numrate = Number(rate);
  const userID = req.session.user._id;
  const item = await Coffee.findById(id);
  const newU = await User.findById(userID);
  newU.raited.push(item);
  item.raiting.push({ userID, numrate });
  const av = item.raiting.reduce((a, c) => a + c.numrate, 0);
  const sr = av / item.raiting.length;
  item.av = sr.toFixed(1);
  await item.save();
  await newU.save();
  res.status(200).json(item);
});

router.get('/user', async (req, res) => {
  const curUser = req.session.user;
  const newU = await User.findById(curUser._id);
  res.json(newU);
});

router.post('/wishlistApi', async (req, res) => {
  const { id } = req.body;
  const userid = req.session.user._id;
  const item = await Coffee.findById(id);
  if (!item.wishlist.includes(userid)) {
    item.wishlist.push(userid);
  } else {
    item.wishlist.map((el, i) => {
      if (el === userid) {
        item.wishlist.splice(i, 1);
      }
    });
  }
  await item.save();
  res.status(200).json(item);
});

export default router;
