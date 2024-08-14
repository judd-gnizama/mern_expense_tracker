import express from "express";

const app = express();

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

export default startServer;
