"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//controllerList
const list_1 = require("../controller/apple/list");
const app_1 = require("../controller/apple/app");
const developer_1 = require("../controller/apple/developer");
const privacy_1 = require("../controller/apple/privacy");
const ratings_1 = require("../controller/apple/ratings");
const reviews_1 = require("../controller/apple/reviews");
const search_1 = require("../controller/apple/search");
const similar_1 = require("../controller/apple/similar");
const suggest_1 = require("../controller/apple/suggest");
//exception
const apple_1 = require("../middlewares/exception/apple");
router.post("/list", list_1.listController);
router.post("/app", apple_1.appReqChecker, app_1.appController);
router.post("/search", apple_1.searchReqChecker, search_1.searchController);
router.post("/developer", apple_1.developerChecker, developer_1.developerController);
router.post("/privacy", apple_1.privacyChecker, privacy_1.privacyController);
router.post("/suggest", apple_1.suggestChecker, suggest_1.suggestController);
router.post("/similar", apple_1.similarChecker, similar_1.similarController);
router.post("/reviews", apple_1.reviewsChecker, reviews_1.reviewsController);
router.post("/ratings", apple_1.ratingsChecker, ratings_1.ratingsController);
exports.default = router;
