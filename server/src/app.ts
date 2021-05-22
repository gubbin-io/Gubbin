import express from "express";
import cors from "cors";
import usersRouter from "./routes/api/v1/users";

const app = express();
require("dotenv").config();

// Middleware for express.js
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up API handling
app.use("/api/v1/users", usersRouter);

export default app;
