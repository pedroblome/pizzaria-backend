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

export { router };

