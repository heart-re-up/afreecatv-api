import "reflect-metadata";
import { Expose, Transform, Type } from "class-transformer";
import { DateTime } from "luxon";
import Sns from "./Sns";
import Group from "./Group";
import Display from "./Display";
import BroadcastCenterInfo from "./BroadcastCenterInfo";
import Board from "./Board";
import { AFTV_DATETIME_FORMAT } from "../../../format";

export default class Station {
  @Type(() => Display)
  @Expose({ name: "display" })
  public readonly display: Display;

  @Type(() => Group)
  @Expose({ name: "groups" })
  public readonly groups: Group[];

  @Type(() => Board)
  @Expose({ name: "menus" })
  public readonly menus: Board[];

  @Type(() => BroadcastCenterInfo)
  @Expose({ name: "upd" })
  public readonly upd: BroadcastCenterInfo;

  @Type(() => Board)
  @Expose({ name: "vods" })
  public readonly vods: Board[];

  @Type(() => Sns)
  @Expose({ name: "sns" })
  public readonly sns: Sns[];

  @Type(() => DateTime)
  @Transform(
    (params) => DateTime.fromFormat(params.value, AFTV_DATETIME_FORMAT),
    {
      toClassOnly: true,
    },
  )
  @Expose({ name: "broad_start" })
  public readonly broadStart: DateTime; // "2023-09-12 20:45:39";

  @Expose({ name: "grade" })
  public readonly grade: number; // 0

  @Type(() => DateTime)
  @Transform(
    (params) => DateTime.fromFormat(params.value, AFTV_DATETIME_FORMAT),
    {
      toClassOnly: true,
    },
  )
  /** 방송국 개설일 */
  @Expose({ name: "jointime" })
  public readonly jointime: DateTime; // "2018-12-25 00:21:25";

  @Expose({ name: "station_name" })
  public readonly stationName: string; // 'heart.re.up'

  @Expose({ name: "station_no" })
  public readonly stationNo: number; // 20068979

  @Expose({ name: "station_title" })
  public readonly stationTitle: string; // ''

  @Expose({ name: "total_broad_time" })
  public readonly totalBroadTime: number; // seconds

  @Expose({ name: "user_id" })
  public readonly userId: string; // 'devking'

  @Expose({ name: "user_nick" })
  public readonly userNick: string; // 'ㅎㅎㅎ'

  @Expose({ name: "active_no" })
  public readonly activeNo: number; // 0

  constructor(
    display: Display,
    groups: Group[],
    menus: Board[],
    upd: BroadcastCenterInfo,
    vods: Board[],
    sns: Sns[],
    broadStart: DateTime,
    grade: number,
    jointime: DateTime,
    stationName: string,
    stationNo: number,
    stationTitle: string,
    totalBroadTime: number,
    userId: string,
    userNick: string,
    activeNo: number,
  ) {
    this.display = display;
    this.groups = groups;
    this.menus = menus;
    this.upd = upd;
    this.vods = vods;
    this.sns = sns;
    this.broadStart = broadStart;
    this.grade = grade;
    this.jointime = jointime;
    this.stationName = stationName;
    this.stationNo = stationNo;
    this.stationTitle = stationTitle;
    this.totalBroadTime = totalBroadTime;
    this.userId = userId;
    this.userNick = userNick;
    this.activeNo = activeNo;
  }
}
