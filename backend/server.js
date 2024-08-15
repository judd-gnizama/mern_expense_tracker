import express from "express";
import { testRouter } from "./routes/testRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : process.env.FRONTEND_URL;

//Middlewares
app.use(express.json());
const corsOptions = {
  origin: FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

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
