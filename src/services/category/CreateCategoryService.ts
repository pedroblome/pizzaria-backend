import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}


class CreateCategoryService {
  async execute({name}: CategoryRequest) {
    if(!name){
      throw new Error("category name invalid")
    }
    const category = await prismaClient.category.create({
      data:{
        name:name
      },
      select:{
        name:true,
        id:true
      }
    })
    console.log("category created é: ", category)
    return { category };
  }
}

export { CreateCategoryService };
