import express from "express";
import { testRouter } from "./routes/testRouter.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
let PORT = 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.json({ message: "Heylo w" });
});

app.use("/api/test", testRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/dist", "index.html"));
});

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
