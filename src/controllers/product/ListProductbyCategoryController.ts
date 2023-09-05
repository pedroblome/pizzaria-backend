import { Request, Response } from "express";
import { ListProductbyCategoryService } from "../../services/product/ListProductbyCategoryService";

class ListProductbyCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.body.category_id as string;
    const listByCategory = new ListProductbyCategoryService();
    const products = await listByCategory.execute({ category_id });
    return res.json(products);
  }
}

export { ListProductbyCategoryController };
