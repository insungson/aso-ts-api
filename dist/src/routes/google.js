"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//controllerList
const list_1 = require("../controller/google/list");
const app_1 = require("../controller/google/app");
const developer_1 = require("../controller/google/developer");
const categories_1 = require("../controller/google/categories");
const permissions_1 = require("../controller/google/permissions");
const reviews_1 = require("../controller/google/reviews");
const search_1 = require("../controller/google/search");
const similar_1 = require("../controller/google/similar");
const suggest_1 = require("../controller/google/suggest");
//exception
const google_1 = require("../middlewares/exception/google");
// router
router.post("/list", list_1.listController);
router.post("/app", google_1.appReqChecker, app_1.appController);
router.post("/search", google_1.searchReqChecker, search_1.searchController);
router.post("/developer", google_1.developerChecker, developer_1.developerController);
router.post("/suggest", google_1.suggestChecker, suggest_1.suggestController);
router.post("/reviews", google_1.reviewsChecker, reviews_1.reviewsController);
router.post("/similar", google_1.similarChecker, similar_1.similarController);
router.post("/permissions", google_1.permissionsChecker, permissions_1.permissionsController);
router.post("/categories", categories_1.categoriesController);
exports.default = router;
