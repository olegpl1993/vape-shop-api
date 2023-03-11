import Router from "express";
import ProductController from "./ProductController.js";

const router = new Router();

// маршрукты по которым делаются запросы к серверу
router.post('/products', ProductController.create); // добавление продукта
router.get('/products', ProductController.getAll); // получение списка всех продуктов
router.get('/products/:id', ProductController.getOne); // получение продукта по id
router.put('/products', ProductController.update); // обновление продукта
router.delete('/products/:id', ProductController.delete); // удаление продукта по id

export default router;