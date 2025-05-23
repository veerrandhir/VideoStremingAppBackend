import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

// used to manage json and set limit

app.use(express.json({ limit: "16kb" }));

//
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to keep images and fabicons (logs)
app.use(express.static("public"));

//a type of middleware (a piece of software that processes incoming requests) used in web applications through web or url so for test purpose we set in env = * but in real world we set  host or service porvider domain

app.use(cookieParser());

export { app };
