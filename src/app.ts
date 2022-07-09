/******************************************************
  process.env.NODE_ENV Define
******************************************************/
process.env.NODE_ENV =
  process.env.NODE_ENV &&
  process.env.NODE_ENV.trim().toLowerCase() == "production"
    ? "production"
    : "development";

/******************************************************
library module
******************************************************/
import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import appleRouter from "./routes/apple";
import googleRouter from "./routes/google";

const prod = process.env.NODE_ENV === "production";

/******************************************************
 express initialize
******************************************************/
const app = express();

let originsWhitelist = prod
  ? [
      "http://backoffice.aaa-token.com",
      "https://backoffice.aaa-token.com",
      "https://skyplay.io",
      "http://skyplay.io",
      "https://www.skyplay.io",
      "http://www.skyplay.io",
      "http://101.101.209.86:8080",
      "http://101.101.209.86:9001",
    ]
  : [
      "http://localhost:3000",
      "http://localhost:8081",
      "http://localhost:9000",
      "http://13.124.179.7:8080",
      "http://13.124.179.7:8100",
      "http://13.124.179.7:80",
      "http://13.124.179.7:9000",
    ];

// TODO: 아래는 추후 다시 손봐야 함..
let corsOptions = {
  //@ts-ignore
  origin: function (origin, callback) {
    //@ts-ignore
    let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true,
};

if (prod) {
  app.use(cors());
  app.use(morgan("combined"));
  // app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

/******************************************************
 Router
******************************************************/

app.get("/", (req, res) => {
  res.send("hello express");
});

//apple Router
app.use("/apple", appleRouter);
app.use("/google", googleRouter);

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

app.listen(prod ? process.env.PORT : 8082, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8082
  ################################################
`);
});
