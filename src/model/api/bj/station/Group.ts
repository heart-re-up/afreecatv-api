import "reflect-metadata";
import { Expose, Type } from "class-transformer";
import GroupInfo from "./GroupInfo";

export default class Group {
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
