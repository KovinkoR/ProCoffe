import express from 'express';
import Coffee from '../models/coffee.js';

const router = express.Router();

router.post('/readText', async (req, res) => {
  const { text } = req.body;

  const splitText = text.replace(/[^a-zA-ZА-Яа-я0-9\s]/ig, '\n');
  const newText = splitText.split('\n');
  const newArray = [];
  const base = await Coffee.find();
  base.map((el) => {
    newText.map((elem) => {
      if (elem.includes(el.uniq)) {
        newArray.push(el);
      }
    });
  });

  res.json({ newArray });
});

export default router;
