import { Expose, Type } from "class-transformer";

export class Group {
  @Expose({ name: "idx" })
  public readonly idx: number; // 3906,

  @Expose({ name: "group_no" })
  public readonly groupNo: number; // 3,

  @Expose({ name: "priority" })
  public readonly priority: number; // 7,

  @Type(() => GroupInfo)
  @Expose({ name: "info" })
  public readonly info: GroupInfo;

  constructor(idx: number, groupNo: number, priority: number, info: GroupInfo) {
    this.idx = idx;
    this.groupNo = groupNo;
    this.priority = priority;
    this.info = info;
  }
}

export class GroupInfo {
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
