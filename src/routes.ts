import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DetailCategoryController } from "./controllers/category/DetailCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

const router = Router();

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
// router.get("/me_teste", isAuthenticated);


// -- CATEGORY 
router.post("/categories", isAuthenticated, new CreateCategoryController().handle);
router.get("/me_categories", isAuthenticated, new DetailCategoryController().handle);

// -- PRODUCT
router.post("/products", isAuthenticated, new CreateProductController().handle);

export { router };

