import {
  ICommonAppResponse,
  ICommonDeveloperResponse,
  ICommonListResponse,
  ICommonReviewsResponse,
  ICommonSearchResponse,
  ICommonSimilarResponse,
  IConvertAppResponse,
  IConvertDeveloperResponse,
  IConvertListResponse,
  IConvertSearchResponse,
  IConvertSimilarResponse,
} from "../common";

import {
  IAppleOnlyApp,
  IAppleOnlyDeveloper,
  IAppleOnlyList,
  IAppleOnlyReviews,
  IAppleOnlySearch,
  IAppleOnlySimilar,
} from "../apple/model";

//////////////////////////////////////////
/**
 * Apple 클래스 메서드 및 리턴 정의
 */
/////////////////////////////////////////
export interface IGoogleMEthods {
  app: (params: IGoogleAppResponse) => IGoogleToCommonApp;
  developer: (params: IGoogleDeveloperResponse[]) => IGoogleToCommonDeveloper[];
  list: (params: IGoogleListResponse[]) => IGoogleToCommonList[];
  reviews: (params: IGoogleReviewsResponse[]) => IGoogleToCommonReviews[];
  search: (params: IGoogleSearchResponse[]) => IGoogleToCommonSearch[];
  similar: (params: IGoogleSimilarResponse[]) => IGoogleToCommonSimilar[];
}

/////////////////////////////////////////
/**
 *  apple => 공통 변수 처리 모음
 */
/////////////////////////////////////////
export interface IGoogleToCommonApp
  extends ICommonAppResponse,
    IConvertAppResponse,
    IGoogleOnlyApp,
    IAppleOnlyApp {}
export interface IGoogleToCommonDeveloper
  extends ICommonDeveloperResponse,
    IConvertDeveloperResponse,
    IGoogleOnlyDeveloper,
    IAppleOnlyDeveloper {}
export interface IGoogleToCommonList
  extends ICommonListResponse,
    IConvertListResponse,
    IGoogleOnlyList,
    IAppleOnlyList {}
export interface IGoogleToCommonReviews
  extends ICommonReviewsResponse,
    IGoogleOnlyReviews,
    IAppleOnlyReviews {}
export interface IGoogleToCommonSearch
  extends ICommonSearchResponse,
    IConvertSearchResponse,
    IGoogleOnlySearch,
    IAppleOnlySearch {}
export interface IGoogleToCommonSimilar
  extends ICommonSimilarResponse,
    IConvertSimilarResponse,
    IGoogleOnlySimilar,
    IAppleOnlySimilar {}

/////////////////////////////////////////
/**
 * apple 만 가진 속성
 */
/////////////////////////////////////////
export interface IGoogleOnlyApp {
  descriptionHTML: string | null;
  summary: string | null;
  installs: string | null;
  minInstalls: number | null;
  maxInstalls: number | null;
  scoreText: string | null;
  ratings: number | null;
  histogram: {
    No1: number;
    No2: number;
    No3: number;
    No4: number;
    No5: number;
  };
  priceText: string | null;
  available: boolean | null;
  offersIAP: boolean | null;
  IAPRange: string | null;
  androidVersion: string | null;
  androidVersionText: string | null;
  developerEmail: string | null;
  developerAddress: string | null;
  privacyPolicy: string | null;
  developerInternalID: string | null;
  headerImage: string | null;
  adSupported: boolean | null;
  comments: string[];
}
export interface IGoogleOnlyDeveloper {
  scoreText: string | null;
}
export interface IGoogleOnlyList {
  scoreText: string | null;
  score: number | null;
}
export interface IGoogleOnlyReviews {
  thumbsUp: number | null;
  criterias: { criteria: string; rating: number }[];
  date: string | null;
  scoreText: string | null;
  replyDate: string | null;
  replyText: string | null;
  userImage: string | null;
}
export interface IGoogleOnlySearch {
  scoreText: string | null;
}
export interface IGoogleOnlySimilar {
  scoreText: string | null;
}

/////////////////////////////////////////
/**
 * RequestParams! 원래 라이브러리 Request Params
 * (이건 건들면 안됨.. 라이브러리 변경시만 건듬)
 */
/////////////////////////////////////////
export interface IGoogleAppRequest {}
export interface IGoogleDeveloperRequest {}
export interface IGoogleListRequest {}
export interface IGoogleReviewsRequest {}
export interface IGoogleSearchRequest {}
export interface IGoogleSimilarRequest {}

/**
 * google 의 app 함수 리턴 타입
 */
export interface IGoogleAppResponse {
  title: string | null;
  description: string | null;
  descriptionHTML: string | null;
  summary: string | null;
  installs: string | null;
  minInstalls: number | null;
  maxInstalls: number | null;
  score: number | null;
  scoreText: string | null;
  ratings: number | null;
  reviews: number | null;
  histogram: {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
  } | null;
  price: number | null;
  free: boolean | null;
  currency: string | null;
  priceText: string | null;
  available: boolean | null;
  offersIAP: boolean | null;
  IAPRange: string | null;
  androidVersion: string | null;
  androidVersionText: string | null;
  developer: string | null;
  developerId: string | null;
  developerEmail: string | null;
  developerWebsite: string | null;
  developerAddress: string | null;
  privacyPolicy?: string | null;
  developerInternalID: string | null;
  genre: string | null;
  genreId: string | null;
  icon: string | null;
  headerImage: string | null;
  screenshots: string[] | null;
  contentRating: string | null;
  adSupported: boolean | null;
  released: string | null;
  updated: number | null;
  version: string | null;
  recentChanges: string | null;
  comments: string[] | null;
  appId: string | null;
  url: string | null;
}

/**
 * google 의 developer 함수 리턴 타입
 */
export interface IGoogleDeveloperResponse {
  title: string | null;
  appId: string | null;
  url: string | null;
  icon: string | null;
  developer: string | null;
  currency?: string | null;
  price?: number | null;
  free: boolean | null;
  summary: string | null;
  scoreText: string | null;
  score: number | null;
}

/**
 * google 의 list 함수 리턴 타입
 */
export interface IGoogleListResponse {
  title: string | null;
  appId: string | null;
  url: string | null;
  icon: string | null;
  developer: string | null;
  currency?: string | null;
  price?: number | null;
  free: boolean | null;
  summary: string | null;
  scoreText: string | null;
  score: number | null;
}

/**
 * google 의 reviews 함수 리턴 타입
 */
export interface IGoogleReviewsResponse {
  id: string | null;
  userName: string | null;
  userImage: string | null;
  date: string | null;
  score: number | null;
  scoreText: string | null;
  url: string | null;
  title: string | null;
  text: string | null;
  replyDate: string | null;
  replyText: string | null;
  version: string | null;
  thumbsUp: number | null;
  criterias: { criteria: string; rating: number }[] | null;
}

/**
 * google 의 search 함수 리턴 타입
 */
export interface IGoogleSearchResponse {
  title: string;
  appId: string;
  url: string;
  icon: string;
  developer: string;
  developerId: string;
  currency?: string;
  price?: number;
  free: boolean;
  summary: string;
  scoreText: string;
  score: number;
}

/**
 * google 의 similar 함수 리턴 타입
 */
export interface IGoogleSimilarResponse {
  title: string;
  appId: string;
  url: string;
  icon: string;
  developer: string;
  currency?: string;
  price?: number;
  free: boolean;
  summary: string;
  scoreText: string;
  score: number;
}
