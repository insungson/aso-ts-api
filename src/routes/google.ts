import { Router } from "express";

const router = Router();

//controllerList
import { listController } from "../controller/google/list";
import { appController } from "../controller/google/app";
import { developerController } from "../controller/google/developer";
import { categoriesController } from "../controller/google/categories";
import { permissionsController } from "../controller/google/permissions";
import { reviewsController } from "../controller/google/reviews";
import { searchController } from "../controller/google/search";
import { similarController } from "../controller/google/similar";
import { suggestController } from "../controller/google/suggest";

//exception
import {
  appReqChecker,
  searchReqChecker,
  developerChecker,
  suggestChecker,
  reviewsChecker,
  similarChecker,
  permissionsChecker,
} from "../middlewares/exception/google";

// router
router.post("/list", listController);
router.post("/app", appReqChecker, appController);
router.post("/search", searchReqChecker, searchController);
router.post("/developer", developerChecker, developerController);
router.post("/suggest", suggestChecker, suggestController);
router.post("/reviews", reviewsChecker, reviewsController);
router.post("/similar", similarChecker, similarController);
router.post("/permissions", permissionsChecker, permissionsController);
router.post("/categories", categoriesController);

export default router;
