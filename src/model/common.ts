export enum providerType {
  google = "google",
  apple = "apple",
}

/**
 * google && apple 모두에서 공통으로 사용되는 type
 */
export interface ICommonAppResponse {
  // 타입
  provider_type: providerType;
  // google/apple 공통 속성
  appId: string | null;
  url: string | null;
  title: string | null;
  description: string | null;
  icon: string | null;
  contentRating: string | null;
  released: string | null;
  updated: string | null; // 구글은 숫자, 애플은 문자열임.
  version: string | null;
  price: number | null;
  currency: string | null;
  free: boolean | null;
  developerId: string | null; // 구글은 문자, 애플은 숫자임.
  developer: string | null;
  developerWebsite: string | null;
  score: number | null;
  reviews: number | null;
  screenshots: string[];
}
export interface ICommonDeveloperResponse {
  // 타입
  provider_type: providerType;
  // google/apple 공통 속성
  title: string | null;
  appId: string | null;
  url: string | null;
  icon: string | null;
  developer: string | null;
  currency: string | null;
  price: number | null;
  free: boolean | null;
  score: number | null;
}
export interface ICommonListResponse {
  // 타입
  provider_type: providerType;
  // google/apple 공통 속성
  title: string | null;
  appId: string | null;
  url: string | null;
  icon: string | null;
  developer: string | null;
  currency: string | null;
  price: number | null;
  free: boolean | null;
}
export interface ICommonReviewsResponse {
  // 타입
  provider_type: providerType;
  // google/apple 공통 속성
  id: string | null;
  userName: string | null;
  score: number | null;
  url: string | null;
  title: string | null;
  text: string | null;
  version: string | null;
}
export interface ICommonSearchResponse {
  // 타입
  provider_type: providerType;
  // google/apple 공통 속성
  title: string | null;
  appId: string | null;
  url: string | null;
  icon: string | null;
  developer: string | null;
  developerId: string | null; // 구글은 문자, 애플은 숫자임.
  currency: string | null;
  price: number | null;
  free: boolean | null;
  score: number | null;
}
export interface ICommonSimilarResponse {
  // 타입
  provider_type: providerType;
  // google/apple 공통 속성
  title: string | null;
  appId: string | null;
  url: string | null;
  icon: string | null;
  developer: string | null;
  currency: string | null;
  price: number | null;
  free: boolean | null;
  score: number | null;
}
/**
 * google/apple 속성은 다르지만 의미는 같은 타입
 */
export interface IConvertAppResponse {
  // apple / google 의미는 같지만 속성은 다른것..
  genre: string[]; // apple:  "genres": [ "Entertainment", "Photo & Video"], google: "genre": "Social",
  genreId: string[]; // apple: "genreIds": [ "6016", "6008" ], google: "genreId": "SOCIAL",
  releaseNotes: string | null; // apple: 	"releaseNotes": "Elevate your videos with new transition effects.",  google: "recentChanges": "Try brand-new creative effects to make your videos stand out.",
}
export interface IConvertDeveloperResponse {
  // apple / google 의미는 같지만 속성은 다른것..
  description: string | null;
  // apple: "description": "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don’t, and you’ll find an endless stream of short videos that feel personalized just for you. From your morning coffee to your afternoon errands, TikTok has the videos that are guaranteed to make your day.\n\nWe make it easy for you to discover and create your own original videos by providing easy-to-use tools to view and capture your daily moments. Take your videos to the next level with special effects, filters, music, and more. \n\n■ Watch endless amount of videos customized specifically for you\nA personalized video feed based on what you watch, like, and share. TikTok offers you real, interesting, and fun videos that will make your day.\n \n■ Explore videos, just one scroll away\nWatch all types of videos, from Comedy, Gaming, DIY, Food, Sports, Memes, and Pets, to Oddly Satisfying, ASMR, and everything in between.\n \n■ Pause recording multiple times in one video\nPause and resume your video with just a tap. Shoot as many times as you need.\n \n■ Be entertained and inspired by a global community of creators\nMillions of creators are on TikTok showcasing their incredible skills and everyday life. Let yourself be inspired.\n\n■ Add your favorite music or sound to your videos for free\nEasily edit your videos with millions of free music clips and sounds. We curate music and sound playlists for you with the hottest tracks in every genre, including Hip Hop, Edm, Pop, Rock, Rap, and Country, and the most viral original sounds.\n\n■ Express yourself with creative effects\nUnlock tons of filters, effects, and AR objects to take your videos to the next level.\n\n■ Edit your own videos \nOur integrated editing tools allow you to easily trim, cut, merge and duplicate video clips without leaving the app.\n\n■ Obtain access to LIVE benefits to better interact with hosts!\nChoose from one-month subscription or auto-renewal subscription to enjoy special LIVE benefits (currently only available in limited regions)\n\nNote: \nIf you subscribe via Apple, payment will be charged to App Store Account at confirmation of purchase. Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period. Account will be charged for renewal within 24 hours prior to the end of the current period at the rate of the selected plan. Subscriptions and auto-renewal may be managed by going to Account Settings after purchase.\n\nMonthly price:  $5.99 USD (US, KW, OM, BH, DZ, IQ, JO, LB, LY, MA, MR, TN, YE, LA, MM, KH) / AED 20.99 / R$ 34.9 BRL / EGP 99.99 / £4.99 GBP / 20.99 QAR / 549 ₽ RUB / SR 24.99 SAR / ₺69,99 TRY\n\nTerms of Service —\nhttps://www.tiktok.com/legal/terms-of-service\n\nPrivacy Policy —\nhttps://www.tiktok.com/legal/privacy-policy\n\n* Any feedback? Contact us at https://www.tiktok.com/legal/report/feedback or tweet us @tiktok_us",
  // google: "summary": "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don’t, and you’ll find an endless stream of short videos that feel personalized just for you. From your morning coffee to your afternoon errands, TikTok has the videos that are guaranteed to make your day.<br><br>We make it easy for you to discover and create your own original videos by providing easy-to-use tools to view and capture your daily moments. Take your videos to the next level with special effects, filters, music, and more. <br><br>■ Watch endless amount of videos customized specifically for you<br>A personalized video feed based on what you watch, like, and share. TikTok offers you real, interesting, and fun videos that will make your day.<br> <br>■ Explore videos, just one scroll away<br>Watch all types of videos, from Comedy, Gaming, DIY, Food, Sports, Memes, and Pets, to Oddly Satisfying, ASMR, and everything in between.<br> <br>■ Pause recording multiple times in one video<br>Pause and resume your video with just a tap. Shoot as many times as you need.<br> <br>■ Be entertained and inspired by a global community of creators<br>Millions of creators are on TikTok showcasing their incredible skills and everyday life. Let yourself be inspired.<br><br>■ Add your favorite music or sound to your videos for free<br>Easily edit your videos with millions of free music clips and sounds. We curate music and sound playlists for you with the hottest tracks in every genre, including Hip Hop, Edm, Pop, Rock, Rap, and Country, and the most viral original sounds.<br><br>■ Express yourself with creative effects<br>Unlock tons of filters, effects, and AR objects to take your videos to the next level.<br><br>■ Edit your own videos <br>Our integrated editing tools allow you to easily trim, cut, merge and duplicate video clips without leaving the app.<br><br>* Any feedback? Contact us at https://www.tiktok.com/legal/report/feedback or tweet us @tiktok_us",
}
export interface IConvertListResponse {
  // apple / google 의미는 같지만 속성은 다른것..
  description: string | null;
  // apple: "description": "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don’t, and you’ll find an endless stream of short videos that feel personalized just for you. From your morning coffee to your afternoon errands, TikTok has the videos that are guaranteed to make your day.\n\nWe make it easy for you to discover and create your own original videos by providing easy-to-use tools to view and capture your daily moments. Take your videos to the next level with special effects, filters, music, and more. \n\n■ Watch endless amount of videos customized specifically for you\nA personalized video feed based on what you watch, like, and share. TikTok offers you real, interesting, and fun videos that will make your day.\n \n■ Explore videos, just one scroll away\nWatch all types of videos, from Comedy, Gaming, DIY, Food, Sports, Memes, and Pets, to Oddly Satisfying, ASMR, and everything in between.\n \n■ Pause recording multiple times in one video\nPause and resume your video with just a tap. Shoot as many times as you need.\n \n■ Be entertained and inspired by a global community of creators\nMillions of creators are on TikTok showcasing their incredible skills and everyday life. Let yourself be inspired.\n\n■ Add your favorite music or sound to your videos for free\nEasily edit your videos with millions of free music clips and sounds. We curate music and sound playlists for you with the hottest tracks in every genre, including Hip Hop, Edm, Pop, Rock, Rap, and Country, and the most viral original sounds.\n\n■ Express yourself with creative effects\nUnlock tons of filters, effects, and AR objects to take your videos to the next level.\n\n■ Edit your own videos \nOur integrated editing tools allow you to easily trim, cut, merge and duplicate video clips without leaving the app.\n\n■ Obtain access to LIVE benefits to better interact with hosts!\nChoose from one-month subscription or auto-renewal subscription to enjoy special LIVE benefits (currently only available in limited regions)\n\nNote: \nIf you subscribe via Apple, payment will be charged to App Store Account at confirmation of purchase. Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period. Account will be charged for renewal within 24 hours prior to the end of the current period at the rate of the selected plan. Subscriptions and auto-renewal may be managed by going to Account Settings after purchase.\n\nMonthly price:  $5.99 USD (US, KW, OM, BH, DZ, IQ, JO, LB, LY, MA, MR, TN, YE, LA, MM, KH) / AED 20.99 / R$ 34.9 BRL / EGP 99.99 / £4.99 GBP / 20.99 QAR / 549 ₽ RUB / SR 24.99 SAR / ₺69,99 TRY\n\nTerms of Service —\nhttps://www.tiktok.com/legal/terms-of-service\n\nPrivacy Policy —\nhttps://www.tiktok.com/legal/privacy-policy\n\n* Any feedback? Contact us at https://www.tiktok.com/legal/report/feedback or tweet us @tiktok_us",
  // google: "summary": "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don’t, and you’ll find an endless stream of short videos that feel personalized just for you. From your morning coffee to your afternoon errands, TikTok has the videos that are guaranteed to make your day.<br><br>We make it easy for you to discover and create your own original videos by providing easy-to-use tools to view and capture your daily moments. Take your videos to the next level with special effects, filters, music, and more. <br><br>■ Watch endless amount of videos customized specifically for you<br>A personalized video feed based on what you watch, like, and share. TikTok offers you real, interesting, and fun videos that will make your day.<br> <br>■ Explore videos, just one scroll away<br>Watch all types of videos, from Comedy, Gaming, DIY, Food, Sports, Memes, and Pets, to Oddly Satisfying, ASMR, and everything in between.<br> <br>■ Pause recording multiple times in one video<br>Pause and resume your video with just a tap. Shoot as many times as you need.<br> <br>■ Be entertained and inspired by a global community of creators<br>Millions of creators are on TikTok showcasing their incredible skills and everyday life. Let yourself be inspired.<br><br>■ Add your favorite music or sound to your videos for free<br>Easily edit your videos with millions of free music clips and sounds. We curate music and sound playlists for you with the hottest tracks in every genre, including Hip Hop, Edm, Pop, Rock, Rap, and Country, and the most viral original sounds.<br><br>■ Express yourself with creative effects<br>Unlock tons of filters, effects, and AR objects to take your videos to the next level.<br><br>■ Edit your own videos <br>Our integrated editing tools allow you to easily trim, cut, merge and duplicate video clips without leaving the app.<br><br>* Any feedback? Contact us at https://www.tiktok.com/legal/report/feedback or tweet us @tiktok_us",
}
export interface IConvertSearchResponse {
  // apple / google 의미는 같지만 속성은 다른것..
  description: string | null;
  // apple: 	"description": "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. All you have to do is watch, engage with what you like, skip what you don’t, and you’ll find an endless stream of short videos that feel personalized just for you. From your morning coffee to your afternoon errands, TikTok has the videos that are guaranteed to make your day.\n\nWe make it easy for you to discover and create your own original videos by providing easy-to-use tools to view and capture your daily moments. Take your videos to the next level with special effects, filters, music, and more. \n\n■ Watch endless amount of videos customized specifically for you\nA personalized video feed based on what you watch, like, and share. TikTok offers you real, interesting, and fun videos that will make your day.\n \n■ Explore videos, just one scroll away\nWatch all types of videos, from Comedy, Gaming, DIY, Food, Sports, Memes, and Pets, to Oddly Satisfying, ASMR, and everything in between.\n \n■ Pause recording multiple times in one video\nPause and resume your video with just a tap. Shoot as many times as you need.\n \n■ Be entertained and inspired by a global community of creators\nMillions of creators are on TikTok showcasing their incredible skills and everyday life. Let yourself be inspired.\n\n■ Add your favorite music or sound to your videos for free\nEasily edit your videos with millions of free music clips and sounds. We curate music and sound playlists for you with the hottest tracks in every genre, including Hip Hop, Edm, Pop, Rock, Rap, and Country, and the most viral original sounds.\n\n■ Express yourself with creative effects\nUnlock tons of filters, effects, and AR objects to take your videos to the next level.\n\n■ Edit your own videos \nOur integrated editing tools allow you to easily trim, cut, merge and duplicate video clips without leaving the app.\n\n■ Obtain access to LIVE benefits to better interact with hosts!\nChoose from one-month subscription or auto-renewal subscription to enjoy special LIVE benefits (currently only available in limited regions)\n\nNote: \nIf you subscribe via Apple, payment will be charged to App Store Account at confirmation of purchase. Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period. Account will be charged for renewal within 24 hours prior to the end of the current period at the rate of the selected plan. Subscriptions and auto-renewal may be managed by going to Account Settings after purchase.\n\nMonthly price:  $5.99 USD (US, KW, OM, BH, DZ, IQ, JO, LB, LY, MA, MR, TN, YE, LA, MM, KH) / AED 20.99 / R$ 34.9 BRL / EGP 99.99 / £4.99 GBP / 20.99 QAR / 549 ₽ RUB / SR 24.99 SAR / ₺69,99 TRY\n\nTerms of Service —\nhttps://www.tiktok.com/legal/terms-of-service\n\nPrivacy Policy —\nhttps://www.tiktok.com/legal/privacy-policy\n\n* Any feedback? Contact us at https://www.tiktok.com/legal/report/feedback or tweet us @tiktok_us",
  // google: "summary": "Join your friends and discover videos you love, only on TikTok",
}
export interface IConvertSimilarResponse {
  // apple / google 의미는 같지만 속성은 다른것..
  description: string | null;
  // apple: "description": "- Be found, find more.\nWe built Trovo to make it easier than ever for an audience to find you and for you to find your audience. Get featured on the front page with Boost Rocket, check out what’s trending with Vibetags, and use our mobile go-live tools to share content anytime, anywhere.\n\n- Connect on a whole new level\nWe’re bringing a new dimension to live-streaming. Earn gems, rack up points, receive spells, win a Treasure Box. Through our chat room and subscriber benefits, we’re geared up to give the entire streaming and viewing experience a new dimension, both on- and offline. You want it interactive, you got it.\n\n-We’re in it together\nEveryone on Trovo is part of our community. Whether it’s on Discord, during Product Roundtables, or at our Dev Corner Stream events, anyone can jump in. Together is always better.\n\n-Up your game.\nMaybe you’ve been doing this for years. Maybe you’re a n00b. It doesn’t matter. Trovo supports streamers at all stages. Through our New Streamer Onboard Program, Level-up and Partnership Program, we’ve got everything you need to skyrocket your stream.\n\n-Help shape the platform\nSlide into our DMs, hit us up on Discord: we’re all ears. We’re totally open to learning directly from our community about what they want and need, so we can roll out updates at warp speed. Together we can continue to make Trovo amazing.\n\n\nSubscription Service Notice\n\nSubscription Renewal:\n\nOnce your subscription purchase is successful, you have authorized Trovo to renew subscription automatically each month and deduct the subscription fee for next subscription cycle when the current subscription cycle expires.\n\nEach month at 24 hours before the subscription expiration date, the payment will be deducted from your Apple account and the subscription will be renewed for 1 month.\n\nCancel Subscription:\n\nIf you want to cancel subscription, please do so at least 24 hours in advance following these instructions: Open the Settings app - Tap your name, then tap Subscriptions - Tap the subscription that you want to manage - Tap Cancel Subscription. If you don't see Cancel Subscription, the subscription is already canceled and won't renew.\n\nOne appleid can only open subscription service for one Trovo account.\n\nFor more information about the terms of service, please refer to: https://trovo.live/policy/terms-of-service.html\nFor more information about the privacy policy, please refer to: https://trovo.live/policy/privacy-notice.html",
  // google: "summary": "Instagram (from Facebook) allows you to create and share your photos, stories, and videos with the friends and followers you care about. Connect with friends, share what you&#39;re up to, or see what&#39;s new from others all over the world. Explore our community where you can feel free to be yourself and share everything from your daily moments to life&#39;s highlights.<br><br>INSTA Reels bring you a new way to create and discover entertaining short videos. You can watch, like, comment, and share Reels videos in a dedicated space in Explore.<br><br>*Watch &amp; create short clips up to 15 seconds long with INSTA Reels.<br>Add special effects, background music, face filters, emojis, and stickers to bring your ideas to life<br>Upload your creative video clips and expand your audience with Explore <br>Enjoy millions of entertaining, funny, and informative videos<br>Watch &amp; share any Instagram Reels video with your friends<br><br>*Add photos and videos to your INSTA Story that disappear after 24 hours, and bring them to life with fun creative tools.<br>Stories allow you to easily share moments or posts from your day with text, music, stickers, and GIFs to bring your Stories to life<br>Share memes privately with your friends and have conversations<br>Boomerangs loop any moment you capture for a fun mini-video while Superzoom lets you add special effects as the camera automatically zooms in<br>Add polls to your Stories to get more interaction with friends and followers<br>Choose specific Close Friends who can watch your video clips or make them public<br>Pin your favorite memories to your profile to keep your Stories alive as Highlights<br><br>* Message your friends in Direct <br>Start fun conversations with one or more friends about what you see on Feed, Stories, and INSTA Reels.<br>Video chat to connect no matter where you are<br>Learn about what&#39;s trending from your favorite accounts and send them to friends<br>Send messages to your friends, share posts privately, and receive chat notifications<br><br>* Post photos and videos to your INSTA Feed<br>Upload photos and videos directly from your phone library <br>Share content with your followers instantly<br>Post photos and videos to your feed that you want to show on your profile<br>Post short videos or photo updates from moments in your life<br>Receive notifications when someone likes or comments on your post<br><br>*Search &amp; Explore to Learn More About Your Interests<br>* Follow your favorite bands, celebrities, actors, athletes, and singers for live updates<br>* Watch skits, movie scenes, news updates, music performances, sports highlights, and more from your favorite pages<br>* Check out IGTV for longer videos from your favorite INSTA creators.<br>* Discover brands and connect with local small businesses<br>* Shop for products that compliment your personal style.",
}
