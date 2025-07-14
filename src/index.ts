import App from "./app";
import { Config } from "./config";
import { DB } from "./models";


async function main() {
    const config = Config.getInstance();
    const db = new DB();
    await db.connect();
    const app = new App(parseInt(config.values.PORT));

    app.listen();
}

main();