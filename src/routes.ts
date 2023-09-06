import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DetailCategoryController } from "./controllers/category/DetailCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from './config/multer'
import { ListProductbyCategoryController } from "./controllers/product/ListProductbyCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { AddItemController } from "./controllers/order/AddItemController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
// router.get("/me_teste", isAuthenticated);


// -- CATEGORY 
router.post("/categories", isAuthenticated, new CreateCategoryController().handle);
router.get("/me_categories", isAuthenticated, new DetailCategoryController().handle);


// -- PRODUCT
router.post("/products", isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get("/products_by_category", isAuthenticated, new ListProductbyCategoryController().handle);


// -- ORDER
router.post("/orders", isAuthenticated, new CreateOrderController().handle);
router.delete("/orders", isAuthenticated, new DeleteOrderController().handle);
router.delete("/order/remove", isAuthenticated, new DeleteOrderController().handle);
router.post("/orders_item", isAuthenticated, new AddItemController().handle);

export { router };

