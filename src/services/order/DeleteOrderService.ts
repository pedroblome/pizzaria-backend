import prismaClient from "../../prisma";

interface DeleteOrderRequest {
  id: string;
}

class DeleteOrderService {
  async execute({ id }: DeleteOrderRequest) {
    const orderDeleted = await prismaClient.order.delete({
      where: {
        id: id,
      },
    });
    return orderDeleted;
  }
}

export { DeleteOrderService };
