import "dotenv/config";

export class Config {
    private static instance: Config;
    values: { [key: string]: string } = {
        PORT: process.env.PORT!,
        JWT_SECRET: process.env.JWT_SECRET!,
        MONGO_URI: process.env.MONGO_URI!,
    };



    private constructor() {
    }

    static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    get(key: string): string | number {
        return this.values[key];
    }

    set(key: string, value: string) {
        this.values[key] = value;
    }

}