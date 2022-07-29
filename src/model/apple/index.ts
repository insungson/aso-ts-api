import {
  IAppleMethods,
  IAppleAppResponse,
  IAppleDeveloperResponse,
  IAppleListResponse,
  IAppleReviewsResponse,
  IAppleSearchResponse,
  IAppleSimilarResponse,
  IAppleToCommonApp,
  IAppleToCommonDeveloper,
  IAppleToCommonList,
  IAppleToCommonReviews,
  IAppleToCommonSearch,
  IAppleToCommonSimilar,
} from "./model";
import { providerType } from "../common";

export class Apple implements IAppleMethods {
  // public commonObj:
  //   | IAppleAppResponse
  //   | IAppleDeveloperResponse[]
  //   | IAppleListResponse[]
  //   | IAppleReviewsResponse[]
  //   | IAppleSearchResponse[]
  //   | IAppleSimilarResponse[];
  // constructor(
  //   params:
  //     | IAppleAppResponse
  //     | IAppleDeveloperResponse[]
  //     | IAppleListResponse[]
  //     | IAppleReviewsResponse[]
  //     | IAppleSearchResponse[]
  //     | IAppleSimilarResponse[]
  // ) {
  //   this.commonObj = params;
  // }
  app(params: IAppleAppResponse): IAppleToCommonApp {
    return {
      // 타입
      provider_type: providerType.apple,
      // 공통
      appId: params.appId ?? null,
      url: params.url ?? null,
      title: params.title ?? null,
      description: params.description ?? null,
      icon: params.icon ?? null,
      contentRating: params.contentRating ?? null,
      released: params.released ?? null,
      updated: params.updated?.toString() ?? null, // 구글은 숫자, 애플은 문자임. (문자로 통일)
      version: params.version ?? null,
      price: params.price ?? null,
      currency: params.currency ?? null,
      free: params.free ?? null,
      developerId: params.developerId ? params.developerId.toString() : null, // 구글은 문자, 애플은 숫자임. (문자로 통일)
      developer: params.developer ?? null,
      developerWebsite: params.developerWebsite ?? null,
      score: params.score ?? null,
      reviews: params.reviews ?? null,
      screenshots: params.screenshots ?? [],
      //속성은 다르지만 의미는 같은 것
      genres: params.genres ? params.genres : [],
      genreId: params.genreIds ? params.genreIds : [],
      releaseNotes: params.releaseNotes,
      id: params.id ?? null,
      // 애플만 가진것
      primaryGenre: params.primaryGenre ?? null,
      primaryGenreId: params.primaryGenreId ?? null,
      languages: params.languages ?? [],
      size: params.size ?? null,
      requiredOsVersion: params.requiredOsVersion ?? null,
      developerUrl: params.developerUrl ?? null,
      currentVersionScore: params.currentVersionScore ?? null,
      currentVersionReviews: params.currentVersionReviews ?? null,
      ipadScreenshots: params.ipadScreenshots ?? [],
      appletvScreenshots: params.appletvScreenshots ?? [],
      supportedDevices: params.supportedDevices ?? [],
      // 구글만 가진것
      descriptionHTML: null,
      summary: null,
      installs: null,
      minInstalls: null,
      maxInstalls: null,
      scoreText: null,
      ratings: null,
      histogram: {
        No1: 0,
        No2: 0,
        No3: 0,
        No4: 0,
        No5: 0,
      },
      priceText: null,
      available: null,
      offersIAP: null,
      IAPRange: null,
      androidVersion: null,
      androidVersionText: null,
      developerEmail: null,
      developerAddress: null,
      privacyPolicy: null,
      developerInternalID: null,
      headerImage: null,
      adSupported: null,
      comments: [],
    };
  }
  developer(params: IAppleDeveloperResponse[]): IAppleToCommonDeveloper[] {
    return params.map((paramItem) => {
      return {
        // 타입
        provider_type: providerType.apple,
        // 공통 타입
        title: paramItem.title ?? null,
        appId: paramItem.appId ?? null,
        url: paramItem.url ?? null,
        icon: paramItem.icon ?? null,
        developer: paramItem.developer ?? null,
        currency: paramItem.currency ?? null,
        price: paramItem.price ?? null,
        free: paramItem.free ?? null,
        score: paramItem.score ?? null,
        // 속성은 다르지만 의미는 같은 타입
        description: paramItem.description ?? null,
        // 애플만 있는 속성 타입
        id: paramItem.id ?? null,
        genres: paramItem.genres ?? [],
        genreIds: paramItem.genreIds ?? [],
        primaryGenre: paramItem.primaryGenre ?? null,
        primaryGenreId: paramItem.primaryGenreId ?? null,
        contentRating: paramItem.contentRating ?? null,
        languages: paramItem.languages ?? [],
        size: paramItem.size ?? null,
        requiredOsVersion: paramItem.requiredOsVersion ?? null,
        released: paramItem.released ?? null,
        updated: paramItem.updated ?? null,
        releaseNotes: paramItem.releaseNotes ?? null,
        version: paramItem.version ?? null,
        developerId: paramItem.developerId ?? null,
        developerUrl: paramItem.developerUrl ?? null,
        developerWebsite: paramItem.developerWebsite ?? null,
        reviews: paramItem.reviews ?? null,
        currentVersionScore: paramItem.currentVersionScore ?? null,
        currentVersionReviews: paramItem.currentVersionReviews ?? null,
        screenshots: paramItem.screenshots ?? [],
        ipadScreenshots: paramItem.ipadScreenshots ?? [],
        appletvScreenshots: paramItem.appletvScreenshots ?? [],
        supportedDevices: paramItem.supportedDevices ?? [],
        // 구글만 있는 속성 타입
        scoreText: null,
      };
    });
  }
  list(params: IAppleListResponse[]): IAppleToCommonList[] {
    return params.map((paramObj) => {
      return {
        // 타입
        provider_type: providerType.apple,
        // 공통 타입
        title: paramObj.title ?? null,
        appId: paramObj.appId ?? null,
        url: paramObj.url ?? null,
        icon: paramObj.icon ?? null,
        developer: paramObj.developer ?? null,
        currency: paramObj.currency ?? null,
        price: paramObj.price ?? null,
        free: paramObj.free ?? null,
        // 속성은 다르지만 의미는 같은 타입
        description: paramObj.description ?? null,
        // 애플만 있는 속성 타입
        id: paramObj.id ?? null,
        developerUrl: paramObj.developerUrl ?? null,
        developerId: paramObj.developerId ?? null,
        genres: paramObj.genre ? [paramObj.genre] : [],
        genreId: paramObj.genreId ? [paramObj.genreId] : [],
        released: paramObj.released ?? null,
        // 구글만 있는 속성 타입
        scoreText: null,
        score: null,
      };
    });
  }
  reviews(params: IAppleReviewsResponse[]): IAppleToCommonReviews[] {
    return params.map((paramObj) => {
      return {
        // 타입
        provider_type: providerType.apple,
        // google/apple 공통 속성
        id: paramObj.id ?? null,
        userName: paramObj.userName ?? null,
        score: paramObj.score ?? null,
        url: paramObj.url ?? null,
        title: paramObj.title ?? null,
        text: paramObj.text ?? null,
        version: paramObj.version ?? null,
        // 속성은 다르지만 의미는 같은 타입
        // 애플만 있는 속성 타입
        userUrl: paramObj.userUrl ?? null,
        // 구글만 있는 속성 타입
        thumbsUp: null,
        criterias: [{ criteria: "", rating: 0 }],
        date: null,
        scoreText: null,
        replyDate: null,
        replyText: null,
        userImage: null,
      };
    });
  }
  search(params: IAppleSearchResponse[]): IAppleToCommonSearch[] {
    return params.map((paramObj) => {
      return {
        // 타입
        provider_type: providerType.apple,
        // google/apple 공통 속성
        title: paramObj.title ?? null,
        appId: paramObj.appId ?? null,
        url: paramObj.url ?? null,
        icon: paramObj.icon ?? null,
        developer: paramObj.developer ?? null,
        developerId: paramObj.developerId
          ? paramObj.developerId.toString()
          : null,
        currency: paramObj.currency ?? null,
        price: paramObj.price ?? null,
        free: paramObj.free ?? null,
        score: paramObj.score ?? null,
        // 속성은 다르지만 의미는 같은 타입
        description: paramObj.description ?? null,
        // 애플만 있는 속성 타입
        id: paramObj.id ?? null,
        genres: paramObj.genres ?? [],
        genreIds: paramObj.genreIds ?? [],
        primaryGenre: paramObj.primaryGenre ?? null,
        primaryGenreId: paramObj.primaryGenreId ?? null,
        contentRating: paramObj.contentRating ?? null,
        languages: paramObj.languages ?? [],
        size: paramObj.size ?? null,
        requiredOsVersion: paramObj.requiredOsVersion ?? null,
        released: paramObj.released ?? null,
        updated: paramObj.updated ?? null,
        releaseNotes: paramObj.releaseNotes ?? null,
        version: paramObj.version ?? null,
        developerUrl: paramObj.developerUrl ?? null,
        developerWebsite: paramObj.developerWebsite ?? null,
        reviews: paramObj.reviews ?? null,
        currentVersionScore: paramObj.currentVersionScore ?? null,
        currentVersionReviews: paramObj.currentVersionReviews ?? null,
        screenshots: paramObj.screenshots ?? [],
        ipadScreenshots: paramObj.ipadScreenshots ?? [],
        appletvScreenshots: paramObj.appletvScreenshots ?? [],
        supportedDevices: paramObj.supportedDevices ?? [],
        // 구글만 있는 속성 타입
        scoreText: null,
      };
    });
  }
  similar(params: IAppleSimilarResponse[]): IAppleToCommonSimilar[] {
    return params.map((paramItem) => {
      return {
        // 타입
        provider_type: providerType.apple,
        // google/apple 공통 속성
        title: paramItem.title ?? null,
        appId: paramItem.appId ?? null,
        url: paramItem.url ?? null,
        icon: paramItem.icon ?? null,
        developer: paramItem.developer ?? null,
        currency: paramItem.currency ?? null,
        price: paramItem.price ?? null,
        free: paramItem.free ?? null,
        score: paramItem.score ?? null,
        // apple / google 의미는 같지만 속성은 다른것..
        description: paramItem.description ?? null,
        // 애플만 있는 속성 타입
        id: paramItem.id ?? null,
        genres: paramItem.genres ?? [],
        genreIds: paramItem.genreIds ?? [],
        primaryGenre: paramItem.primaryGenre ?? null,
        primaryGenreId: paramItem.primaryGenreId ?? null,
        contentRating: paramItem.contentRating ?? null,
        languages: paramItem.languages ?? [],
        size: paramItem.size ?? null,
        requiredOsVersion: paramItem.requiredOsVersion ?? null,
        released: paramItem.released ?? null,
        updated: paramItem.updated ?? null,
        releaseNotes: paramItem.releaseNotes ?? null,
        version: paramItem.version ?? null,
        developerId: paramItem.developerId ?? null,
        developerUrl: paramItem.developerUrl ?? null,
        reviews: paramItem.reviews ?? null,
        currentVersionScore: paramItem.currentVersionScore ?? null,
        currentVersionReviews: paramItem.currentVersionReviews ?? null,
        screenshots: paramItem.screenshots ?? [],
        ipadScreenshots: paramItem.ipadScreenshots ?? [],
        appletvScreenshots: paramItem.appletvScreenshots ?? [],
        supportedDevices: paramItem.supportedDevices ?? [],
        // 구글만 있는 속성 타입
        scoreText: null,
      };
    });
  }
}
