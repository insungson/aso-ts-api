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
  IGoogleOnlyApp,
  IGoogleOnlyDeveloper,
  IGoogleOnlyList,
  IGoogleOnlyReviews,
  IGoogleOnlySearch,
  IGoogleOnlySimilar,
} from "../google/model";

//////////////////////////////////////////
/**
 * Apple 클래스 메서드 및 리턴 정의
 */
/////////////////////////////////////////
export interface IAppleMethods {
  app: (params: IAppleAppResponse) => IAppleToCommonApp;
  developer: (params: IAppleDeveloperResponse[]) => IAppleToCommonDeveloper[];
  list: (params: IAppleListResponse[]) => IAppleToCommonList[];
  reviews: (params: IAppleReviewsResponse[]) => IAppleToCommonReviews[];
  search: (params: IAppleSearchResponse[]) => IAppleToCommonSearch[];
  similar: (params: IAppleSimilarResponse[]) => IAppleToCommonSimilar[];
}
/////////////////////////////////////////
/**
 *  apple => 공통 변수 처리 모음
 */
/////////////////////////////////////////
export interface IAppleToCommonApp
  extends ICommonAppResponse,
    IConvertAppResponse,
    IAppleOnlyApp,
    IGoogleOnlyApp {}
export interface IAppleToCommonDeveloper
  extends ICommonDeveloperResponse,
    IConvertDeveloperResponse,
    IAppleOnlyDeveloper,
    IGoogleOnlyDeveloper {}
export interface IAppleToCommonList
  extends ICommonListResponse,
    IConvertListResponse,
    IAppleOnlyList,
    IGoogleOnlyList {}
export interface IAppleToCommonReviews
  extends ICommonReviewsResponse,
    IAppleOnlyReviews,
    IGoogleOnlyReviews {}
export interface IAppleToCommonSearch
  extends ICommonSearchResponse,
    IConvertSearchResponse,
    IAppleOnlySearch,
    IGoogleOnlySearch {}
export interface IAppleToCommonSimilar
  extends ICommonSimilarResponse,
    IConvertSimilarResponse,
    IAppleOnlySimilar,
    IGoogleOnlySimilar {}

/////////////////////////////////////////
/**
 * apple 만 가진 속성
 */
/////////////////////////////////////////
export interface IAppleOnlyApp {
  id: number | null;
  primaryGenre: string | null;
  primaryGenreId: number | null;
  languages: string[] | null;
  size: string | null;
  requiredOsVersion: string | null;
  developerUrl: string | null;
  currentVersionScore: number | null;
  currentVersionReviews: number | null;
  ipadScreenshots: string[] | null;
  appletvScreenshots: string[] | null;
  supportedDevices: string[] | null;
}
export interface IAppleOnlyDeveloper {
  id: number | null;
  genres: string[] | null;
  genreIds: string[] | null;
  primaryGenre: string | null;
  primaryGenreId: number | null;
  contentRating: string | null;
  languages: string[] | null;
  size: string | null;
  requiredOsVersion: string | null;
  released: string | null;
  updated: string | null;
  releaseNotes: string | null;
  version: string | null;
  developerId: number | null;
  developerUrl: string | null;
  developerWebsite: string | null;
  reviews: number | null;
  currentVersionScore: number | null;
  currentVersionReviews: number | null;
  screenshots: string[] | null;
  ipadScreenshots: string[] | null;
  appletvScreenshots: string[] | null;
  supportedDevices: string[] | null;
}
export interface IAppleOnlyList {
  id: string | null;
  developerUrl: string | null;
  developerId: string | null;
  genre: string | null;
  genreId: string | null;
  released: string | null;
}
export interface IAppleOnlyReviews {
  userUrl: string | null;
}
export interface IAppleOnlySearch {
  id: number | null;
  genres: string[] | null;
  genreIds: string[] | null;
  primaryGenre: string | null;
  primaryGenreId: number | null;
  contentRating: string | null;
  languages: string[] | null;
  size: string | null;
  requiredOsVersion: string | null;
  released: string | null;
  updated: string | null;
  releaseNotes: string | null;
  version: string | null;
  developerUrl: string | null;
  developerWebsite: string | null;
  reviews: number | null;
  currentVersionScore: number | null;
  currentVersionReviews: number | null;
  screenshots: string[] | null;
  ipadScreenshots: string[] | null;
  appletvScreenshots: string[] | null;
  supportedDevices: string[] | null;
}
export interface IAppleOnlySimilar {
  id: number | null;
  genres: string[] | null;
  genreIds: string[] | null;
  primaryGenre: string | null;
  primaryGenreId: number | null;
  contentRating: string | null;
  languages: string[] | null;
  size: string | null;
  requiredOsVersion: string | null;
  released: string | null;
  updated: string | null;
  releaseNotes: string | null;
  version: string | null;
  developerId: number | null;
  developerUrl: string | null;
  reviews: number | null;
  currentVersionScore: number | null;
  currentVersionReviews: number | null;
  screenshots: string[] | null;
  ipadScreenshots: string[] | null;
  appletvScreenshots: string[] | null;
  supportedDevices: string[] | null;
}

/////////////////////////////////////////
/**
 * RequestParams! 원래 라이브러리 Request Params
 */
/////////////////////////////////////////
export interface IAppleAppRequest {
  id?: number;
  appId: string;
  country?: string;
  lang?: string;
  rating?: number | string;
}
export interface IAppleDeveloperRequest {
  devId: number;
  country?: string;
  lang?: string;
}
export interface IAppleListRequest {
  collection?: string;
  category?: string;
  country?: string;
  lang?: string;
  num?: number;
  fullDetail?: boolean;
}
export interface IAppleReviewsRequest {
  id?: number;
  appId: string;
  country?: string;
  page?: number;
  sort?: string;
}
export interface IAppleSearchRequest {
  term: string;
  num?: number;
  page?: number;
  country?: string;
  lang?: string;
  idsOnly?: boolean;
}
export interface IAppleSimilarRequest {
  id?: number;
  appId: string;
}

/**
 * apple 의 app 함수 리턴 타입
 */
export interface IAppleAppResponse {
  id: number | null;
  appId: string | null;
  title: string | null;
  url: string | null;
  description: string | null;
  icon: string | null;
  genres: string[] | null;
  genreIds: string[] | null;
  primaryGenre: string | null;
  primaryGenreId: number | null;
  contentRating: string | null;
  languages: string[] | null;
  size: string | null;
  requiredOsVersion: string | null;
  released: string | null;
  updated: string | null;
  releaseNotes: string | null;
  version: string | null;
  price: number | null;
  currency: string | null;
  free: boolean | null;
  developerId: number | null;
  developer: string | null;
  developerUrl: string | null;
  developerWebsite: string | null;
  score: number | null;
  reviews: number | null;
  currentVersionScore: number | null;
  currentVersionReviews: number | null;
  screenshots: string[] | null;
  ipadScreenshots: string[] | null;
  appletvScreenshots: string[] | null;
  supportedDevices: string[] | null;
}

/**
 * apple 의 developer 함수 리턴 타입
 */
export interface IAppleDeveloperResponse {
  id: number | null;
  appId: string | null;
  title: string | null;
  url: string | null;
  description: string | null;
  icon: string | null;
  genres: string[] | null;
  genreIds: string[] | null;
  primaryGenre: string | null;
  primaryGenreId: number | null;
  contentRating: string | null;
  languages: string[] | null;
  size: string | null;
  requiredOsVersion: string | null;
  released: string | null;
  updated: string | null;
  releaseNotes: string | null;
  version: string | null;
  price: number | null;
  currency: string | null;
  free: boolean | null;
  developerId: number | null;
  developer: string | null;
  developerUrl: string | null;
  developerWebsite: string | null;
  score: number | null;
  reviews: number | null;
  currentVersionScore: number | null;
  currentVersionReviews: number | null;
  screenshots: string[] | null;
  ipadScreenshots: string[] | null;
  appletvScreenshots: string[] | null;
  supportedDevices: string[] | null;
}

/**
 * apple 의 list 함수 리턴 타입
 */
export interface IAppleListResponse {
  id: string | null;
  appId: string | null;
  title: string | null;
  icon: string | null;
  url: string | null;
  price: number | null;
  currency: string | null;
  free: boolean | null;
  description: string | null;
  developer: string | null;
  developerUrl: string | null;
  developerId: string | null;
  genre: string | null;
  genreId: string | null;
  released: string | null;
}

/**
 * apple 의 reviews 함수 리턴 타입
 */
export interface IAppleReviewsResponse {
  id: string | null;
  userName: string | null;
  userUrl: string | null;
  version: string | null;
  score: number | null;
  title: string | null;
  text: string | null;
  url: string | null;
}

/**
 * apple 의 search 함수 리턴 타입
 */
export interface IAppleSearchResponse {
  id: number | null;
  appId: string | null;
  title: string | null;
  url: string | null;
  description: string | null;
  icon: string | null;
  genres: string[] | null;
  genreIds: string[] | null;
  primaryGenre: string | null;
  primaryGenreId: number | null;
  contentRating: string | null;
  languages: string[] | null;
  size: string | null;
  requiredOsVersion: string | null;
  released: string | null;
  updated: string | null;
  releaseNotes: string | null;
  version: string | null;
  price: number | null;
  currency: string | null;
  free: boolean | null;
  developerId: number | null;
  developer: string | null;
  developerUrl: string | null;
  developerWebsite: string | null;
  score: number | null;
  reviews: number | null;
  currentVersionScore: number | null;
  currentVersionReviews: number | null;
  screenshots: string[] | null;
  ipadScreenshots: string[] | null;
  appletvScreenshots: string[] | null;
  supportedDevices: string[] | null;
}

/**
 * apple 의 similar 함수 리턴 타입
 */
export interface IAppleSimilarResponse {
  id: number | null;
  appId: string | null;
  title: string | null;
  url: string | null;
  description: string | null;
  icon: string | null;
  genres: string[] | null;
  genreIds: string[] | null;
  primaryGenre: string | null;
  primaryGenreId: number | null;
  contentRating: string | null;
  languages: string[] | null;
  size: string | null;
  requiredOsVersion: string | null;
  released: string | null;
  updated: string | null;
  releaseNotes: string | null;
  version: string | null;
  price: number | null;
  currency: string | null;
  free: true | null;
  developerId: number | null;
  developer: string | null;
  developerUrl: string | null;
  score: number | null;
  reviews: number | null;
  currentVersionScore: number | null;
  currentVersionReviews: number | null;
  screenshots: string[] | null;
  ipadScreenshots: string[] | null;
  appletvScreenshots: string[] | null;
  supportedDevices: string[] | null;
}
