// write user controller with class based approach
import { Request, Response } from "express";
import { JwtService, UserServices } from "../services";

export class UserController {

    private userServices: UserServices = new UserServices();
    private jwtService: JwtService = JwtService.getInstance();

  constructor() {
  }

  async login(walletAddress: string, chainId: number) {
    const user = await this.userServices.login(walletAddress, chainId);
    const token = this.jwtService.createToken({ id: user?._id, walletAddress: user?.walletAddress, chainId: user?.chainId });
    return {
      message: "User logged in successfully",
      status: "success",
      data: {
        user: user,
        token: token,
      }
    };
  }
}