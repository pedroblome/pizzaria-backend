import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("invalid email");
    }
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      }
    });
    if (userAlreadyExists) {
      throw new Error("email user already in use");
    }
    const passwordHash = await hash(password, 8)

    const user = prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password : passwordHash
      },
      select:{
        id: true,
        email: true,
        name: true
      }
    })
    return user;
  }
}

export { CreateUserService };
