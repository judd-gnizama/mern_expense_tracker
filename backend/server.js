import express from "express";
import { testRouter } from "./routes/testRouter.js";

const app = express();
const PORT = 5000;

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.json({ message: "Heylow" });
});

app.use("/api/test", testRouter);

// Connect to database
try {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
} catch (error) {
  console.error(error);
}
