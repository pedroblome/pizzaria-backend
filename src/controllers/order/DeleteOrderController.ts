import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/DeleteOrderService";

class DeleteOrderController {
  async handle(req: Request, res: Response) {
    const delteOrderService = new DeleteOrderService();
    const { id } = req.body;

    const order = await delteOrderService.execute({ id });
    return res.json(order);
  }
}

export { DeleteOrderController };
