// create an express server with class based approach
import express, { Request, Response } from "express";
import { UserRoutes } from "./routes";

class App {
  private app: express.Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ message: "Hello World!", status: "success" });
    });
    this.app.use("/api/v1", (new UserRoutes()).getRouter());
  }

  public listen() {
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export default App;