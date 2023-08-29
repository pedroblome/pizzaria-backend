import { Request, Response } from "express";
import { DetailCategoryService } from "../../services/category/DetailCategoryService";


class DetailCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const detailCategoryService = new DetailCategoryService();
    const detailCategory = await detailCategoryService.execute();
    return res.json(detailCategory);
  }
}

export { DetailCategoryController };
