import express from 'express';

import { CreateProductController } from '../controller/CreateProductController';
import { CreateCategoryController } from '../controller/CreateCategory';
import { CreateProductCategoryController } from '../controller/CreateProductCategoryController';
import { CreateProductWithExistsCategory } from '../controller/CreateProductWithExistsCategory';

const routes = express.Router();

const createProductController = new CreateProductController();
const createCategoryController = new CreateCategoryController();
const createProductCategoryController = new CreateProductCategoryController();
const createProductWithExistsCategory = new CreateProductWithExistsCategory();

routes.get('/product', createProductController.handle);
routes.get('/category', createCategoryController.handle);
routes.get('/categoryproduct', createProductCategoryController.handle);
routes.get('/createproductcategory', createProductWithExistsCategory.handle);

export default routes;