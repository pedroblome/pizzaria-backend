import prismaClient from "../../prisma";

interface RemoveItemRequest {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: RemoveItemRequest) {


    try{
      const itemDeleted = await prismaClient.item.delete({
        where: {
          id: item_id,
        },
      });
      return itemDeleted;
    }
    catch{
      throw new Error("Error in delete item")
    }
  }
}

export { RemoveItemService };
