import express from "express";
import helmet from "helmet";
import apolloserver from "./initqlserver.js";

const app = express();
const PORT = 3000;

app.enable("trust proxy");
app.use(helmet(0));

apolloserver.applyMiddleware({ app });

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:", PORT);
});
