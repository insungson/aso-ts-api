import { Router } from "express";
const router = Router();

//controllerList
import { listController } from "../controller/apple/list";
import { appController } from "../controller/apple/app";
import { developerController } from "../controller/apple/developer";
import { privacyController } from "../controller/apple/privacy";
import { ratingsController } from "../controller/apple/ratings";
import { reviewsController } from "../controller/apple/reviews";
import { searchController } from "../controller/apple/search";
import { similarController } from "../controller/apple/similar";
import { suggestController } from "../controller/apple/suggest";

//exception
import {
  appReqChecker,
  developerChecker,
  privacyChecker,
  ratingsChecker,
  reviewsChecker,
  searchReqChecker,
  similarChecker,
  suggestChecker,
} from "../middlewares/exception/apple";

router.post("/list", listController);
router.post("/app", appReqChecker, appController);
router.post("/search", searchReqChecker, searchController);
router.post("/developer", developerChecker, developerController);
router.post("/privacy", privacyChecker, privacyController);
router.post("/suggest", suggestChecker, suggestController);
router.post("/similar", similarChecker, similarController);
router.post("/reviews", reviewsChecker, reviewsController);
router.post("/ratings", ratingsChecker, ratingsController);

export default router;
