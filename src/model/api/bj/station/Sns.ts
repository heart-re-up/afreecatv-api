import { Expose, Transform, Type } from "class-transformer";
import { DateTime } from "luxon";
import { AFTV_DATETIME_FORMAT } from "../../../format";

export class Sns {
  @Expose({ name: "id" })
  public readonly id: number; // 4992;

  @Expose({ name: "user_id" })
  public readonly userId: string; // "sol3712";

  @Expose({ name: "type" })
  public readonly type: number; // 2;

  @Expose({ name: "channel_id" })
  public readonly channelId: string; // "7268216076";

  @Expose({ name: "playlist_id" })
  public readonly playlistId: string; // "";

  @Expose({ name: "title" })
  public readonly title: string; // "bj._.haru";

  @Expose({ name: "followers" })
  public readonly followers: number; // 221000;

  @Expose({ name: "state" })
  public readonly state: number; // 0;

  @Type(() => DateTime)
  @Transform(
    (params) => DateTime.fromFormat(params.value, AFTV_DATETIME_FORMAT),
    {
      toClassOnly: true,
    },
  )
  @Expose({ name: "expire_at" })
  public readonly expireAt: DateTime; // "2024-02-22 05:03:14";

  @Type(() => DateTime)
  @Transform(
    (params) => DateTime.fromFormat(params.value, AFTV_DATETIME_FORMAT),
    {
      toClassOnly: true,
    },
  )
  @Expose({ name: "created_at" })
  public readonly createdAt: DateTime; // "2021-02-04 16:49:17";

  @Type(() => DateTime)
  @Transform(
    (params) => DateTime.fromFormat(params.value, AFTV_DATETIME_FORMAT),
    {
      toClassOnly: true,
    },
  )
  @Expose({ name: "updated_at" })
  public readonly updatedAt: DateTime; // "2024-02-07 00:45:10";

  constructor(
    id: number,
    userId: string,
    type: number,
    channelId: string,
    playlistId: string,
    title: string,
    followers: number,
    state: number,
    expireAt: DateTime,
    createdAt: DateTime,
    updatedAt: DateTime,
  ) {
    this.id = id;
    this.userId = userId;
    this.type = type;
    this.channelId = channelId;
    this.playlistId = playlistId;
    this.title = title;
    this.followers = followers;
    this.state = state;
    this.expireAt = expireAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
