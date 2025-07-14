// write a jwt service with class based approach with create token and verify token , decode token
import jwt from "jsonwebtoken";
import { Config } from "../config";

export class JwtService {
    private static instance: JwtService;
    private config = Config.getInstance();

  constructor() {
  }

  // create a function to create a token with payload and expires in 30 days
  static getInstance() {
    if (!JwtService.instance) {
      JwtService.instance = new JwtService();
    }
    return JwtService.instance;
  }

  createToken(payload: any) {
    return jwt.sign(payload, this.config.get("JWT_SECRET") as string, { expiresIn: "30d" });
  }
//  verify token
  verifyToken(token: string) {
    return jwt.verify(token, this.config.values.JWT_SECRET as string);
  }

  // decode token
  decodeToken(token: string) {
    return jwt.decode(token);
  }
}