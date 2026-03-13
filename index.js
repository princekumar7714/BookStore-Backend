import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import connectDB from "./DB/db.js";

dotenv.config();   // load env first

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

// routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});