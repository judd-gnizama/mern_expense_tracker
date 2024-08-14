import express from "express";
import { testRouter } from "./routes/testRouter.js";

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

const startServer = (port) => {
  app
    .listen(port, () => {
      console.log(`Listening on PORT ${port}`);
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.error(`PORT ${port} is already in use. Trying next port...`);
        startServer(port + 1);
      } else {
        console.error(err);
      }
    });
};
