import { Expose } from "class-transformer";

export class Bbs {
  @Expose({ name: "bbs_no" })
  public readonly bbsNo: number; // 63419261,

  @Expose({ name: "station_no" })
  public readonly stationNo: number; // 20068979,

  @Expose({ name: "auth_no" })
  public readonly authNo: number; // 101,

  @Expose({ name: "w_auth_no" })
  public readonly wAuthNo: number; // 216,

  @Expose({ name: "display_type" })
  public readonly displayType: number; // 108,

  @Expose({ name: "rnum" })
  public readonly rnum: number; // 0,

  @Expose({ name: "line" })
  public readonly line: number; // 1,

  @Expose({ name: "indention" })
  public readonly indention: number; // 0,

  @Expose({ name: "name" })
  public readonly name: string; // '방송 다시보기',

  @Expose({ name: "name_font" })
  public readonly nameFont: number; // 0,

  @Expose({ name: "main_view_yn" })
  public readonly mainViewYn: number; // 0,

  @Expose({ name: "view_type" })
  public readonly viewType: number; // 1

  constructor(
    bbsNo: number,
    stationNo: number,
    authNo: number,
    wAuthNo: number,
    displayType: number,
    rnum: number,
    line: number,
    indention: number,
    name: string,
    nameFont: number,
    mainViewYn: number,
    viewType: number,
  ) {
    this.bbsNo = bbsNo;
    this.stationNo = stationNo;
    this.authNo = authNo;
    this.wAuthNo = wAuthNo;
    this.displayType = displayType;
    this.rnum = rnum;
    this.line = line;
    this.indention = indention;
    this.name = name;
    this.nameFont = nameFont;
    this.mainViewYn = mainViewYn;
    this.viewType = viewType;
  }
}
