
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todoRoute.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/", todoRoutes);
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });


