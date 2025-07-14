// create a user routes with class based approach
import { Router, Request, Response } from "express";
import { UserController } from "../controllers";

const router = Router();

export class UserRoutes {
    private router: Router;
    private userController: UserController = new UserController();

    constructor() {
        this.router = Router();
        this.loginRoute();
    }

    // create a login route
    private loginRoute() {
        this.router.post("/login", async(req: Request, res: Response) => {
            const { walletAddress, chainId } = req.body;
            if (!walletAddress || !chainId) {
                return res.status(400).json({ message: "Wallet address and chain id are required" });
            }
            const user = await this.userController.login(walletAddress, chainId);
            res.status(200).json(user);
        });
    }

    getRouter() {
        return this.router;
    }
}

export default router;