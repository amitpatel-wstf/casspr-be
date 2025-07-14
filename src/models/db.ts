import mongoose from "mongoose";
import { Config } from "../config";

export class DB {
    private config = Config.getInstance();
  constructor() {
    this.connect();
  }

  async connect() {
    console.log(this.config.values.MONGO_URI);
    await mongoose.connect(this.config.values.MONGO_URI as string);
    console.log("Connected to MongoDB");
  }
}