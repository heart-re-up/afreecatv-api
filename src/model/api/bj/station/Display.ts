import "reflect-metadata";
import { Expose } from "class-transformer";

export default class Display {
  @Expose({ name: "main_type" })
  public readonly mainType: string;

  @Expose({ name: "title_type" })
  public readonly titleType: "IMAGE" | "HTML";

  @Expose({ name: "title_text" })
  public readonly titleText: string;

  @Expose({ name: "profile_text" })
  public readonly profileText: string;

  @Expose({ name: "skin_type" })
  public readonly skinType: number; // 0;

  @Expose({ name: "skin_no" })
  public readonly skinNo: number; // 0;

  constructor(
    mainType: string,
    titleType: "IMAGE" | "HTML",
    titleText: string,
    profileText: string,
    skinType: number,
    skinNo: number,
    titleSkinImage: string,
  ) {
    this.mainType = mainType;
    this.titleType = titleType;
    this.titleText = titleText;
    this.profileText = profileText;
    this.skinType = skinType;
    this.skinNo = skinNo;
    this.titleSkinImage = titleSkinImage;
  }

  @Expose({ name: "title_skin_image" })
  public readonly titleSkinImage: string;
}
