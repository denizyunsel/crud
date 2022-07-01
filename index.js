import express from "express";
import bodyParser from "body-parser";

import routes from "./routes/user.js";

import cors from "cors";

const app = express();
const PORT = 5000;






app.use(bodyParser.json());

app.use(cors());

app.use("/user",routes);






app.listen(PORT, () => console.log("Server is running"));



