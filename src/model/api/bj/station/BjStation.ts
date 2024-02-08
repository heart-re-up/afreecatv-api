import "reflect-metadata";
import { Expose, Transform, Type } from "class-transformer";
import { DateTime } from "luxon";
import { Station } from "./Station";
import { TopUser } from "./TopUser";
import { Subscription } from "./Subscription";
import { Broad } from "./Broad";
import { AFTV_DATETIME_FORMAT } from "../../../format";

export class BjStation {
  @Expose({ name: "profile_image" })
  public readonly profileImage: string;

  @Type(() => Station)
  @Expose({ name: "station" })
  public readonly station: Station;

  @Type(() => Broad)
  @Expose({ name: "broad" })
  public readonly broad: Broad | null;

  @Type(() => TopUser)
  @Expose({ name: "starballoon_top" })
  public readonly starballoonTop: TopUser[];

  @Type(() => TopUser)
  @Expose({ name: "sticker_top" })
  public readonly stickerTop: TopUser[];

  @Type(() => Subscription)
  @Expose({ name: "subscription" })
  public readonly subscription: Subscription;

  @Expose({ name: "is_best_bj" })
  public readonly isBestBj: boolean; //  false,

  @Expose({ name: "is_partner_bj" })
  public readonly isPartnerBj: boolean; //  false,

  @Expose({ name: "is_sports_bj" })
  public readonly isSportsBj: boolean; //  false,

  @Expose({ name: "is_ppv_bj" })
  public readonly isPpvBj: boolean; //  false,

  @Expose({ name: "is_af_supporters_bj" })
  public readonly isAfSupportersBj: boolean; //  false,

  @Expose({ name: "is_shopfreeca_bj" })
  public readonly isShopfreecaBj: boolean; //  false,

  @Expose({ name: "is_favorite" })
  public readonly isFavorite: boolean; //  false,

  @Expose({ name: "is_subscription" })
  public readonly isSubscription: boolean; //  false,

  @Expose({ name: "is_owner" })
  public readonly isOwner: boolean; //  false,

  @Expose({ name: "is_manager" })
  public readonly isManager: boolean; //  false,

  @Expose({ name: "is_notice" })
  public readonly isNotice: boolean; //  false,

  @Expose({ name: "is_adsence" })
  public readonly isAdsence: boolean; //  true,

  @Expose({ name: "is_mobile_push" })
  public readonly isMobilePush: boolean; //  false,

  @Expose({ name: "subscribe_visible" })
  public readonly subscribeVisible: "on";

  @Expose({ name: "country" })
  public readonly country: "KR";

  @Type(() => DateTime)
  @Transform(
    (params) => DateTime.fromFormat(params.value, AFTV_DATETIME_FORMAT),
    {
      toClassOnly: true,
    },
  )
  @Expose({ name: "current_timestamp" })
  public readonly currentTimestamp: DateTime; // '2024-02-07 14:03:24'

  constructor(
    profileImage: string,
    station: Station,
    broad: Broad | null,
    starballoonTop: TopUser[],
    stickerTop: TopUser[],
    subscription: Subscription,
    isBestBj: boolean,
    isPartnerBj: boolean,
    isSportsBj: boolean,
    isPpvBj: boolean,
    isAfSupportersBj: boolean,
    isShopfreecaBj: boolean,
    isFavorite: boolean,
    isSubscription: boolean,
    isOwner: boolean,
    isManager: boolean,
    isNotice: boolean,
    isAdsence: boolean,
    isMobilePush: boolean,
    subscribeVisible: "on",
    country: "KR",
    currentTimestamp: DateTime,
  ) {
    this.profileImage = profileImage;
    this.station = station;
    this.broad = broad;
    this.starballoonTop = starballoonTop;
    this.stickerTop = stickerTop;
    this.subscription = subscription;
    this.isBestBj = isBestBj;
    this.isPartnerBj = isPartnerBj;
    this.isSportsBj = isSportsBj;
    this.isPpvBj = isPpvBj;
    this.isAfSupportersBj = isAfSupportersBj;
    this.isShopfreecaBj = isShopfreecaBj;
    this.isFavorite = isFavorite;
    this.isSubscription = isSubscription;
    this.isOwner = isOwner;
    this.isManager = isManager;
    this.isNotice = isNotice;
    this.isAdsence = isAdsence;
    this.isMobilePush = isMobilePush;
    this.subscribeVisible = subscribeVisible;
    this.country = country;
    this.currentTimestamp = currentTimestamp;
  }
}
