"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingsChecker = exports.reviewsChecker = exports.similarChecker = exports.suggestChecker = exports.privacyChecker = exports.developerChecker = exports.searchReqChecker = exports.appReqChecker = void 0;
const keyCheckConditionFn = (reqKeysArr, proviedKeyArr) => {
    return (reqKeysArr.length > 0 &&
        reqKeysArr.filter((key) => proviedKeyArr.includes(key)));
};
const commonKeyChecker = (test) => (req, res, next) => {
    const params = req.body;
    const reqKeysArr = Object.keys(params);
    const proviedKeyArr = test;
    if (keyCheckConditionFn(reqKeysArr, proviedKeyArr)) {
        next();
    }
    else {
        res
            .status(400)
            .send(`${proviedKeyArr.join(", ")} 속성은 반드시 포함되어야 합니다.`);
    }
};
// app 함수에서 포함되어야 하는 키 체크 미들웨어
exports.appReqChecker = commonKeyChecker(["id", "appId"]);
// search 함수에서 포함되어야 하는 키 체크 미들웨어suggest
exports.searchReqChecker = commonKeyChecker(["term"]);
// developer 함수에서 포함되어야 하는 키 체크 미들웨어
exports.developerChecker = commonKeyChecker(["devId"]);
// privacy 함수에서 포함되어야 하는 키 체크 미들웨어
exports.privacyChecker = commonKeyChecker(["id"]);
// suggest 함수에서 포함되어야 하는 키 체크 미들웨어
exports.suggestChecker = commonKeyChecker(["term"]);
// similar 함수에서 포함되어야 하는 키 체크 미들웨어
exports.similarChecker = commonKeyChecker(["id", "appId"]);
// reviews 함수에서 포함되어야 하는 키 체크 미들웨어
exports.reviewsChecker = commonKeyChecker(["id", "appId"]);
// ratings 함수에서 포함되어야 하는 키 체크 미들웨어
exports.ratingsChecker = commonKeyChecker(["id", "appId"]);
