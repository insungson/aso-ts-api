"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const apple_1 = __importDefault(require("./routes/apple"));
const google_1 = __importDefault(require("./routes/google"));
const prod = process.env.NODE_ENV === "production";
/******************************************************
 express initialize
******************************************************/
const app = (0, express_1.default)();
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
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)("combined"));
    // app.use(hpp());
    app.use((0, helmet_1.default)());
}
else {
    app.use((0, morgan_1.default)("dev"));
}
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)(process.env.COOKIE_SECRET));
/******************************************************
 Router
******************************************************/
app.get("/", (req, res) => {
    res.send("hello express");
});
//apple Router
app.use("/apple", apple_1.default);
app.use("/google", google_1.default);
app.get("/welcome", (req, res, next) => {
    res.send("welcome!");
});
app.listen(prod ? process.env.PORT : 8082, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 8082
  ################################################
`);
});
