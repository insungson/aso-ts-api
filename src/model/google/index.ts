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
      screenshots: params.screenshots ?? [],
      // apple / google 의미는 같지만 속성은 다른것..
      genre: params.genre ? [params.genre] : [], // apple:  "genres": [ "Entertainment", "Photo & Video"], google: "genre": "Social",
      genreId: params.genreId ? [params.genreId] : [], // apple: "genreIds": [ "6016", "6008" ], google: "genreId": "SOCIAL",
      releaseNotes: params.recentChanges ?? null, // apple: 	"releaseNotes": "Elevate your videos with new transition effects.",  google: "recentChanges": "Try brand-new creative effects to make your videos stand out.",
      // 구글만 가진 속성
      descriptionHTML: params.descriptionHTML ?? null,
      summary: params.summary ?? null,
      installs: params.installs ?? null,
      minInstalls: params.minInstalls ?? null,
      maxInstalls: params.maxInstalls ?? null,
      scoreText: params.scoreText ?? null,
      ratings: params.ratings ?? null,
      histogram: params.histogram
        ? {
            No1: params.histogram[1],
            No2: params.histogram[2],
            No3: params.histogram[3],
            No4: params.histogram[4],
            No5: params.histogram[5],
          }
        : {
            No1: 0,
            No2: 0,
            No3: 0,
            No4: 0,
            No5: 0,
          },
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
      comments: params.comments ?? [],
      // 애플만 가진 속성
      id: null,
      primaryGenre: null,
      primaryGenreId: null,
      languages: [],
      size: null,
      requiredOsVersion: null,
      developerUrl: null,
      currentVersionScore: null,
      currentVersionReviews: null,
      ipadScreenshots: [],
      appletvScreenshots: [],
      supportedDevices: [],
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
        description: paramObj.summary ?? null,
        // 구글만 가진 속성
        scoreText: paramObj.scoreText ?? null,
        // 애플만 가진 속성
        id: null,
        genres: [],
        genreIds: [],
        primaryGenre: null,
        primaryGenreId: null,
        contentRating: null,
        languages: [],
        size: null,
        requiredOsVersion: null,
        released: null,
        updated: null,
        releaseNotes: null,
        version: null,
        developerId: null,
        developerUrl: null,
        developerWebsite: null,
        reviews: null,
        currentVersionScore: null,
        currentVersionReviews: null,
        screenshots: [],
        ipadScreenshots: [],
        appletvScreenshots: [],
        supportedDevices: [],
      };
    });
  }
  list(params: IGoogleListResponse[]): IGoogleToCommonList[] {
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
        // apple / google 의미는 같지만 속성은 다른것..
        description: paramObj.summary ?? null,
        // 구글만 가진 속성
        scoreText: paramObj.scoreText ?? null,
        score: paramObj.score ?? null,
        // 애플만 가진 속성
        id: null,
        developerUrl: null,
        developerId: null,
        genre: null,
        genreId: null,
        released: null,
      };
    });
  }
  reviews(params: IGoogleReviewsResponse[]): IGoogleToCommonReviews[] {
    console.log("params: ", params);
    return params.map((paramObj) => {
      return {
        // 타입
        provider_type: providerType.google,
        // google/apple 공통 속성
        id: paramObj.id ?? null,
        userName: paramObj.userName ?? null,
        score: paramObj.score ?? null,
        url: paramObj.url ?? null,
        title: paramObj.title ?? null,
        text: paramObj.text ?? null,
        version: paramObj.version ?? null,
        // apple / google 의미는 같지만 속성은 다른것..
        // 구글만 가진 속성
        thumbsUp: paramObj.thumbsUp ?? null,
        criterias: paramObj.criterias ?? [{ criteria: "", rating: 0 }],
        date: paramObj.date ?? null,
        scoreText: paramObj.scoreText ?? null,
        replyDate: paramObj.replyDate ?? null,
        replyText: paramObj.replyText ?? null,
        userImage: paramObj.userImage ?? null,
        // 애플만 가진 속성
        userUrl: null,
      };
    });
  }
  search(params: IGoogleSearchResponse[]): IGoogleToCommonSearch[] {
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
        developerId: paramObj.developerId ?? null, // 구글은 문자, 애플은 숫자임,
        currency: paramObj.currency ?? null,
        price: paramObj.price ?? null,
        free: paramObj.free ?? null,
        score: paramObj.score ?? null,
        // apple / google 의미는 같지만 속성은 다른것..
        description: paramObj.summary ?? null,
        // 구글만 가진 속성
        scoreText: paramObj.scoreText ?? null,
        // 애플만 가진 속성
        id: null,
        genres: [],
        genreIds: [],
        primaryGenre: null,
        primaryGenreId: null,
        contentRating: null,
        languages: [],
        size: null,
        requiredOsVersion: null,
        released: null,
        updated: null,
        releaseNotes: null,
        version: null,
        developerUrl: null,
        developerWebsite: null,
        reviews: null,
        currentVersionScore: null,
        currentVersionReviews: null,
        screenshots: [],
        ipadScreenshots: [],
        appletvScreenshots: [],
        supportedDevices: [],
      };
    });
  }
  similar(params: IGoogleSimilarResponse[]): IGoogleToCommonSimilar[] {
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
        description: paramObj.summary ?? null,
        // 구글만 있는 속성
        scoreText: paramObj.scoreText ?? null,
        // 애플만 있는 속성
        id: null,
        genres: [],
        genreIds: [],
        primaryGenre: null,
        primaryGenreId: null,
        contentRating: null,
        languages: [],
        size: null,
        requiredOsVersion: null,
        released: null,
        updated: null,
        releaseNotes: null,
        version: null,
        developerId: null,
        developerUrl: null,
        reviews: null,
        currentVersionScore: null,
        currentVersionReviews: null,
        screenshots: [],
        ipadScreenshots: [],
        appletvScreenshots: [],
        supportedDevices: [],
      };
    });
  }
}
