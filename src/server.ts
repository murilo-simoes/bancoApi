import express from "express";
import router from "./routes/routes";

async function bootstrap() {
  const cors = require("cors");
  const app = express();

  await app.use(cors());
  await app.use(express.json());
  await app.use(router);

  await app.listen(3333, () => console.log("Server is running"));
}

bootstrap();
