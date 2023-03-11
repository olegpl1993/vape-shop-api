import Product from "./Product.js";

class ProductController {

  // добавление нового продукта в БД
  async create(req, res) {
    try {
      const { category, title, brand, flavor, price, stock, description, images } = req.body;
      const product = await Product.create({ category, title, brand, flavor, price, stock, description, images });
      res.json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // получение всех продуктов
  async getAll(req, res) {
    try {
      const products = await Product.find();
      return res.json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // получение продукта
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'ID не указан' })
      }
      const product = await Product.findById(id);
      return res.json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // обновление продукта
  async update(req, res) {
    try {
      const { id } = req.params;
      const product = req.body;
      if (!id) {
        res.status(400).json({ message: 'ID не указан' })
      }
      const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
      return res.json(updatedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // удаление продукта
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'ID не указан' })
      }
      const product = await Product.findByIdAndDelete(id);
      return res.json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ProductController();