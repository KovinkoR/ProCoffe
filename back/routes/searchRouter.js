import express from 'express';
import Coffee from '../models/coffee.js';

const router = express.Router();

router.post('/searchCoffee', async (req, res) => {
  const { input } = req.body;
  const newText = input.toLowerCase();
  const newArray = [];
  const base = await Coffee.find();
  base.forEach((el) => {
    if (el.title.toLowerCase().includes(newText)) {
      newArray.push(el);
    }
  });
  res.json({ coffeeArr: newArray });
});

export default router;
