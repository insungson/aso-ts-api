import google from "google-play-scraper";
import { Request, Response, NextFunction } from "express";
import { Google } from "../../model/google/index";

export const developerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await google.developer({ fullDetail: true, ...params });
    console.log("result: ", result);
    res.status(200).json(new Google().developer(result));
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
