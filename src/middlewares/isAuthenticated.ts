import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

//type payload

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  //verify token
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    console.log(sub);
    console.log("linha 27 do is auythenticated")
    req.user_id = sub;
    console.log("user id é : ", req.user_id)

    return next();
  } catch (error) {
    res.status(401).end();
  }
}
