import Router from "express";
import ProductController from "./ProductController.js";

const router = new Router();

router.post('/product', ProductController.create); // добавление продукта
router.get('/products'); // получение списка всех продуктов
router.get('/products/:id'); // получение продукта по id
router.put('/products/:id'); // обновление продукта по id
router.delete('/products/:id'); // удаление продукта по id

export default router;