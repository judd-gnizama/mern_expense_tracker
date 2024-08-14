import express from "express";
import { testRouter } from "./routes/testRouter.js";
import startServer from "./utils/startServer.js";

const app = express();
let PORT = 5000;

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.json({ message: "Heylow" });
});

app.use("/api/test", testRouter);

// Connect to database
try {
  startServer(PORT);
} catch (error) {
  console.error(error);
}
