import express from "express";
import { testRouter } from "./routes/testRouter.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;
const FRONTEND_URL = process.env.FRONTEND_URL;

//Middlewares
app.use(express.json());
const corsOptions = {
  origin: FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

//Routes
app.get("/", (req, res) => {
  res.json({
    message: "Heylow",
  });
});

app.use("/api/test", testRouter);

// Connect to database
try {
  app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
