import { Request, Response, NextFunction } from "express";

const keyCheckConditionFn = (reqKeysArr: string[], proviedKeyArr: string[]) => {
  return (
    reqKeysArr.length > 0 &&
    reqKeysArr.filter((key) => proviedKeyArr.includes(key))
  );
};

const commonKeyChecker =
  (test: string[]) => (req: Request, res: Response, next: NextFunction) => {
    const params = req.body;
    const reqKeysArr = Object.keys(params);
    const proviedKeyArr = test;
    if (keyCheckConditionFn(reqKeysArr, proviedKeyArr)) {
      next();
    } else {
      res
        .status(400)
        .send(`${proviedKeyArr.join(", ")} 속성은 반드시 포함되어야 합니다.`);
    }
  };

// app 함수에서 포함되어야 하는 키 체크 미들웨어
export const appReqChecker = commonKeyChecker(["appId"]);

// search 함수에서 포함되어야 하는 키 체크 미들웨어suggest
export const searchReqChecker = commonKeyChecker(["term"]);

// developer 함수에서 포함되어야 하는 키 체크 미들웨어
export const developerChecker = commonKeyChecker(["devId"]);

// suggest 함수에서 포함되어야 하는 키 체크 미들웨어
export const suggestChecker = commonKeyChecker(["term"]);

// similar 함수에서 포함되어야 하는 키 체크 미들웨어
export const similarChecker = commonKeyChecker(["appId"]);

// reviews 함수에서 포함되어야 하는 키 체크 미들웨어
export const reviewsChecker = commonKeyChecker(["appId"]);

// permissions 함수에서 포함되어야 하는 키 체크 미들웨어
export const permissionsChecker = commonKeyChecker(["appId"]);
