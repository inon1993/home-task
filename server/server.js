import express from "express";
import mongoose from "mongoose";
import routes from "./routes/campaignRoutes.js";

mongoose.connect("mongodb://127.0.0.1/HomeTaskDB");
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected.");
});

const app = express();

app.use(express.json());

app.use("/campaign", routes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server is running.");
});
