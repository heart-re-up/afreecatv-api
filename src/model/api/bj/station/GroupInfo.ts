import "reflect-metadata";
import { Expose } from "class-transformer";

export default class GroupInfo {
  @Expose({ name: "group_name" })
  public readonly groupName: string; // "뉴비존";

  @Expose({ name: "group_class_name" })
  public readonly groupClassName: string; // "badge_newbj";

  @Expose({ name: "group_background_color" })
  public readonly groupBackgroundColor: string; // "#fb4848";

  constructor(
    groupName: string,
    groupClassName: string,
    groupBackgroundColor: string,
  ) {
    this.groupName = groupName;
    this.groupClassName = groupClassName;
    this.groupBackgroundColor = groupBackgroundColor;
  }
}
