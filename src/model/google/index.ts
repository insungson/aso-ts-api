import {
  IGoogleMEthods,
  IGoogleAppResponse,
  IGoogleDeveloperResponse,
  IGoogleListResponse,
  IGoogleReviewsResponse,
  IGoogleSearchResponse,
  IGoogleSimilarResponse,
  IGoogleToCommonApp,
  IGoogleToCommonDeveloper,
  IGoogleToCommonList,
  IGoogleToCommonReviews,
  IGoogleToCommonSearch,
  IGoogleToCommonSimilar,
} from "./model";
import { providerType } from "../common";

export class Google implements IGoogleMEthods {
  app(params: IGoogleAppResponse): IGoogleToCommonApp {
    return {
      // 타입
      provider_type: providerType.google,
      // google/apple 공통 속성
      appId: params.appId ?? null,
      url: params.url ?? null,
      title: params.title ?? null,
      description: params.description ?? null,
      icon: params.icon ?? null,
      contentRating: params.contentRating ?? null,
      released: params.released ?? null,
      updated: params.updated ? params.updated.toString() : null, // 구글은 숫자, 애플은 문자열임
      version: params.version ?? null,
      price: params.price ?? null,
      currency: params.currency ?? null,
      free: params.free ?? null,
      developerId: params.developerId ?? null, // 구글은 문자, 애플은 숫자임
      developer: params.developer ?? null,
      developerWebsite: params.developerWebsite ?? null,
      score: params.score ?? null,
      reviews: params.reviews ?? null,
      screenshots: params.screenshots ?? null,
      // apple / google 의미는 같지만 속성은 다른것..
      genre: params.genre ?? null, // apple:  "genres": [ "Entertainment", "Photo & Video"], google: "genre": "Social",
      genreId: params.genreId ?? null, // apple: "genreIds": [ "6016", "6008" ], google: "genreId": "SOCIAL",
      releaseNotes: params.recentChanges ?? null, // apple: 	"releaseNotes": "Elevate your videos with new transition effects.",  google: "recentChanges": "Try brand-new creative effects to make your videos stand out.",
      // 구글만 가진 속성
      descriptionHTML: params.descriptionHTML ?? null,
      summary: params.summary ?? null,
      installs: params.installs ?? null,
      minInstalls: params.minInstalls ?? null,
      maxInstalls: params.maxInstalls ?? null,
      scoreText: params.scoreText ?? null,
      ratings: params.ratings ?? null,
      histogram: params.histogram ?? null,
      priceText: params.priceText ?? null,
      available: params.available ?? null,
      offersIAP: params.offersIAP ?? null,
      IAPRange: params.IAPRange ?? null,
      androidVersion: params.androidVersion ?? null,
      androidVersionText: params.androidVersionText ?? null,
      developerEmail: params.developerEmail ?? null,
      developerAddress: params.developerAddress ?? null,
      privacyPolicy: params.privacyPolicy ?? null,
      developerInternalID: params.developerInternalID ?? null,
      headerImage: params.headerImage ?? null,
      adSupported: params.adSupported ?? null,
      comments: params.comments ?? null,
      // 애플만 가진 속성
      id: null,
      primaryGenre: null,
      primaryGenreId: null,
      languages: null,
      size: null,
      requiredOsVersion: null,
      developerUrl: null,
      currentVersionScore: null,
      currentVersionReviews: null,
      ipadScreenshots: null,
      appletvScreenshots: null,
      supportedDevices: null,
    };
  }

  developer(params: IGoogleDeveloperResponse[]): IGoogleToCommonDeveloper[] {
    return params.map((paramObj) => {
      return {
        // 타입
        provider_type: providerType.google,
        // google/apple 공통 속성
        title: paramObj.title ?? null,
        appId: paramObj.appId ?? null,
        url: paramObj.url ?? null,
        icon: paramObj.icon ?? null,
        developer: paramObj.developer ?? null,
        currency: paramObj.currency ?? null,
        price: paramObj.price ?? null,
        free: paramObj.free ?? null,
        score: paramObj.score ?? null,
        // apple / google 의미는 같지만 속성은 다른것..
      };
    });
  }
  list!: (params: IGoogleListResponse[]) => IGoogleToCommonList[];
  reviews!: (params: IGoogleReviewsResponse[]) => IGoogleToCommonList[];
  search!: (params: IGoogleSearchResponse[]) => IGoogleToCommonSearch[];
  similar!: (params: IGoogleSimilarResponse[]) => IGoogleToCommonSimilar[];
}
