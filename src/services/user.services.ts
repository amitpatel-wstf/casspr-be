import { UserModel } from "../models";
import { JwtService } from "./jwt";

export class UserServices {

    private jwtService: JwtService = JwtService.getInstance();

  constructor() {
  }

  async login(walletAddress: string, chainId: number) {
    const user = await UserModel.findOneAndUpdate({ walletAddress, chainId }, { walletAddress, chainId }, { new: true });
    return user;
  }
}