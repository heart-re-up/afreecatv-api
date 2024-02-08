import { Expose } from "class-transformer";

export class Upd {
  @Expose({ name: "station_no" })
  public readonly stationNo: number;

  @Expose({ name: "user_id" })
  public readonly userId: string;

  @Expose({ name: "asp_code" })
  public readonly aspCode: number;

  @Expose({ name: "fan_cnt" })
  public readonly fanCnt: number;

  @Expose({ name: "today0_visit_cnt" })
  public readonly today0VisitCnt: number;

  @Expose({ name: "today1_visit_cnt" })
  public readonly today1VisitCnt: number;

  @Expose({ name: "total_visit_cnt" })
  public readonly totalVisitCnt: number;

  @Expose({ name: "today0_ok_cnt" })
  public readonly today0OkCnt: number;

  @Expose({ name: "today1_ok_cnt" })
  public readonly today1OkCnt: number;

  @Expose({ name: "today0_fav_cnt" })
  public readonly today0FavCnt: number;

  @Expose({ name: "today1_fav_cnt" })
  public readonly today1FavCnt: number;

  @Expose({ name: "total_ok_cnt" })
  public readonly totalOkCnt: number;

  @Expose({ name: "total_view_cnt" })
  public readonly totalViewCnt: number;

  constructor(
    stationNo: number,
    userId: string,
    aspCode: number,
    fanCnt: number,
    today0VisitCnt: number,
    today1VisitCnt: number,
    totalVisitCnt: number,
    today0OkCnt: number,
    today1OkCnt: number,
    today0FavCnt: number,
    today1FavCnt: number,
    totalOkCnt: number,
    totalViewCnt: number,
  ) {
    this.stationNo = stationNo;
    this.userId = userId;
    this.aspCode = aspCode;
    this.fanCnt = fanCnt;
    this.today0VisitCnt = today0VisitCnt;
    this.today1VisitCnt = today1VisitCnt;
    this.totalVisitCnt = totalVisitCnt;
    this.today0OkCnt = today0OkCnt;
    this.today1OkCnt = today1OkCnt;
    this.today0FavCnt = today0FavCnt;
    this.today1FavCnt = today1FavCnt;
    this.totalOkCnt = totalOkCnt;
    this.totalViewCnt = totalViewCnt;
  }
}
