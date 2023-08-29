import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  category_id: string;
}
class CreateProductService {
  async execute({
    name,
    price,
    description,
    category_id,
  }: ProductRequest) {
    const category = await prismaClient.category.findFirst({
      where: {
        id: category_id,
      },
    });
    if (category_id) {
      throw new Error("Invalid category");
    }
    const productNameAlreadyExists = await prismaClient.product.findFirst({
      where:{
        name: name
      }
    })
    if(productNameAlreadyExists){
      throw new Error("product name already exists.")
    }
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      },
      select: {
        name: true,
        price: true,
        description: true,
        category_id: true,
      },
    });
    return product;
  }
}

export { CreateProductService };
