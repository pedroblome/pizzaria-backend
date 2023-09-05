import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (!name) {
      throw new Error("category name invalid");
    }
    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name: name,
      },
    });
    if (categoryAlreadyExists) {
      throw new Error("category name already exists");
    }
    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        name: true,
        id: true,
      },
    });
    return category ;
  }
}

export { CreateCategoryService };
