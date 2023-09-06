import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/DeleteOrderService";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const removeItemService = new RemoveItemService();
    const { item_id } = req.body;

    const itemRemoved = await removeItemService.execute({item_id });
    return res.json(itemRemoved);
  }
}

export { RemoveItemController };
