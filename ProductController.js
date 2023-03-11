import Product from "./Product.js";

class ProductController {
  async create(req, res) {
    try {
      const { category, title, brand, flavor, price, stock, description, images } = req.body;
      const product = await Product.create({ category, title, brand, flavor, price, stock, description, images });
      res.json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ProductController();