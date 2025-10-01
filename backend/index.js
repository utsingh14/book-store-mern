import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// middleware for parsing request
app.use(express.json());

// middleware for handling CORS policy
app.use(
  cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type"],
  })
);

// defualt request
app.get("/", (req, res) => {
  console.log(res);
  return res.status(234).send("Wellcome to mern");
});

// router for books
app.use("/{books}", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
