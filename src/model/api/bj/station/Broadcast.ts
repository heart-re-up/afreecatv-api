import "reflect-metadata";
import { Expose } from "class-transformer";

/**
 * 방송정보
 */
export default class Broadcast {
  @Expose({ name: "user_id" })
  public readonly userId: string; // "wlgml1219",

  @Expose({ name: "broad_no" })
  public readonly broadNo: number; // 253930757;

  @Expose({ name: "broad_title" })
  public readonly broadTitle: string; // "-녹방입니당!-";

  @Expose({ name: "current_sum_viewer" })
  public readonly currentSumViewer: number; // 10;

  @Expose({ name: "broad_grade" })
  public readonly broadGrade: number; // 0;

  @Expose({ name: "is_password" })
  public readonly isPassword: boolean; // false;

  constructor(
    userId: string,
    broadNo: number,
    broadTitle: string,
    currentSumViewer: number,
    broadGrade: number,
    isPassword: boolean,
  ) {
    this.userId = userId;
    this.broadNo = broadNo;
    this.broadTitle = broadTitle;
    this.currentSumViewer = currentSumViewer;
    this.broadGrade = broadGrade;
    this.isPassword = isPassword;
  }
}
