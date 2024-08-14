import express from "express";
import { testRouter } from "./routes/testRouter.js";
import path from "path";

const app = express();
let PORT = 5000;

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.json({
    message: path.resolve(__dirname, "../frontend/dist", "index.html"),
  });
});

app.use("/api/test", testRouter);

// Connect to database
try {
  // startServer(PORT);
  app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
