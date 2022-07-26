import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(router);

app.listen(3332, () => console.log("Server is running"));
