import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error("user/password is incorrect");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("user/password is incorrect");
    }
    //all verifications done, the user can login in app
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "10d",
      }
    );
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      token: token,
    };
  }
}

export { AuthUserService };
