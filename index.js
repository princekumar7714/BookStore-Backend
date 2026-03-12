import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import connectDB from "./DB/db.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;


// connect to mongoDB

connectDB();
// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});