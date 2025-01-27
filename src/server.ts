import express from "express";
import rateLimit from "express-rate-limit";

import "dotenv/config";
import "./database";

import { router } from "./routes";

const app = express();

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    max: 30
});

app.use(express.json());

app.use(limiter);
app.use(router);

app.listen(3333, () => console.log("Server is running"));