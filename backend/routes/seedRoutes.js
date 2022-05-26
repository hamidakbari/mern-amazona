import express from 'express';
import Product from '../Models/productModel.js';
import data from '../data.js';
import User from '../Models/userModel.js';
const seedRouter = express.Router();
seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProduct = await Product.insertMany(data.products);
  await User.remove({});
  const createdUser = await User.insertMany(data.users);
  res.send({ createdProduct, createdUser });
});
export default seedRouter;
