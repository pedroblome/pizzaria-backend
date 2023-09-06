import prismaClient from "../../prisma";

interface DeleteOrderRequest {
  id: string;
}

class DeleteOrderService {
  async execute({ id }: DeleteOrderRequest) {
    try {
      const orderDeleted = await prismaClient.order.delete({
        where: {
          id: id,
        },
      });
      return orderDeleted;
    } catch (error) {
      throw new Error("Error in delete order")
    }
  }
}

export { DeleteOrderService };
