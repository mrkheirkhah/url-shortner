const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { init } = require("./database-init");

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3333;

async function bootstrap() {
  try {
    const databaseConnection = await init({ url: process.env.MONGO_URI });

    app.listen(PORT, () => {
      console.log(`Server is running at PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
