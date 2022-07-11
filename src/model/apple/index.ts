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
      screenshots: params.screenshots ?? null,
      //속성은 다르지만 의미는 같은 것
      genre: params.genres ? params.genres[0] : null,
      genreId: params.genreIds ? params.genreIds[0] : null,
      releaseNotes: params.releaseNotes,
      id: params.id ?? null,
      // 애플만 가진것
      primaryGenre: params.primaryGenre ?? null,
      primaryGenreId: params.primaryGenreId ?? null,
      languages: params.languages ?? null,
      size: params.size ?? null,
      requiredOsVersion: params.requiredOsVersion ?? null,
      developerUrl: params.developerUrl ?? null,
      currentVersionScore: params.currentVersionScore ?? null,
      currentVersionReviews: params.currentVersionReviews ?? null,
      ipadScreenshots: params.ipadScreenshots ?? null,
      appletvScreenshots: params.appletvScreenshots ?? null,
      supportedDevices: params.supportedDevices ?? null,
      // 구글만 가진것
      descriptionHTML: null,
      summary: null,
      installs: null,
      minInstalls: null,
      maxInstalls: null,
      scoreText: null,
      ratings: null,
      histogram: null,
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
      comments: null,
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
        genres: paramItem.genres ?? null,
        genreIds: paramItem.genreIds ?? null,
        primaryGenre: paramItem.primaryGenre ?? null,
        primaryGenreId: paramItem.primaryGenreId ?? null,
        contentRating: paramItem.contentRating ?? null,
        languages: paramItem.languages ?? null,
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
        screenshots: paramItem.screenshots ?? null,
        ipadScreenshots: paramItem.ipadScreenshots ?? null,
        appletvScreenshots: paramItem.appletvScreenshots ?? null,
        supportedDevices: paramItem.supportedDevices ?? null,
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
        genre: paramObj.genre ?? null,
        genreId: paramObj.genreId ?? null,
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
        criterias: null,
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
        genres: paramObj.genres ?? null,
        genreIds: paramObj.genreIds ?? null,
        primaryGenre: paramObj.primaryGenre ?? null,
        primaryGenreId: paramObj.primaryGenreId ?? null,
        contentRating: paramObj.contentRating ?? null,
        languages: paramObj.languages ?? null,
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
        screenshots: paramObj.screenshots ?? null,
        ipadScreenshots: paramObj.ipadScreenshots ?? null,
        appletvScreenshots: paramObj.appletvScreenshots ?? null,
        supportedDevices: paramObj.supportedDevices ?? null,
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
        genres: paramItem.genres ?? null,
        genreIds: paramItem.genreIds ?? null,
        primaryGenre: paramItem.primaryGenre ?? null,
        primaryGenreId: paramItem.primaryGenreId ?? null,
        contentRating: paramItem.contentRating ?? null,
        languages: paramItem.languages ?? null,
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
        screenshots: paramItem.screenshots ?? null,
        ipadScreenshots: paramItem.ipadScreenshots ?? null,
        appletvScreenshots: paramItem.appletvScreenshots ?? null,
        supportedDevices: paramItem.supportedDevices ?? null,
        // 구글만 있는 속성 타입
        scoreText: null,
      };
    });
  }
}
