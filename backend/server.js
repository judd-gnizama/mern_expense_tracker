import express from "express";
import { testRouter } from "./routes/testRouter.js";
import cors from "cors";

const app = express();
let PORT = 5000;

//Middlewares
app.use(express.json());
const corsOptions = {
  origin: "https://mern-expense-tracker-zymi.vercel.app",
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
  // startServer(PORT);
  app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
