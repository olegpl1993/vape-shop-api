import express from 'express';
import mongoose from 'mongoose';
import Product from './Product.js';

const PORT = 5000;
const BD_URL = 'mongodb+srv://user:user@cluster0.kpncn2z.mongodb.net/?retryWrites=true&w=majority';
const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const { category, title, brand, flavor, price, stock, description, images } = req.body;
    const product = await Product.create({ category, title, brand, flavor, price, stock, description, images });
    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

async function startApp() {
  try {
    await mongoose.connect(BD_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, console.log('server started on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();