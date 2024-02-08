import { Expose } from "class-transformer";

export class TopUser {
  @Expose({ name: "user_id" })
  public readonly userId: string;

  @Expose({ name: "user_nick" })
  public readonly userNick: string;

  @Expose({ name: "profile_image" })
  public readonly profileImage: string; // '//profile.img.afreecatv.com/LOGO/ye/yeryoung56/yeryoung56.jpg'

  constructor(userId: string, userNick: string, profileImage: string) {
    this.userId = userId;
    this.userNick = userNick;
    this.profileImage = profileImage;
  }
}
