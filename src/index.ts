import express from "express";
import dotenv from "dotenv";
import connectDB from "./connections/database";
import restaurantRouter from "./routes/restaurantRouter";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(
  cors({ 
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/restaurants", restaurantRouter);

connectDB();
