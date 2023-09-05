import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}
class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ProductRequest) {
    const category = await prismaClient.category.findFirst({
      where: {
        id: category_id,
      },
    });
    if (!category) {
      throw new Error("invalid category for product");
      
    }
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      },
    });

    return product;
  }
}

export { CreateProductService };
