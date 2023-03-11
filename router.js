import Router from "express";
import ProductController from "./ProductController.js";

const router = new Router();

router.post('/products', ProductController.create); // добавление продукта
router.get('/products', ProductController.getAll); // получение списка всех продуктов
router.get('/products/:id', ProductController.getOne); // получение продукта по id
router.put('/products/:id', ProductController.update); // обновление продукта по id
router.delete('/products/:id', ProductController.delete); // удаление продукта по id

export default router;