import "reflect-metadata";
import { Expose } from "class-transformer";

export default class SuggestBj {
  /** 사용자 아이디 */
  @Expose({ name: "user_id" })
  public readonly userId: string;

  /** 사용자 별명 */
  @Expose({ name: "user_nick" })
  public readonly userNick: string;

  /** 방송국 로고 */
  @Expose({ name: "station_logo" })
  public readonly stationLogo?: string | null;

  /** 베스트 BJ 이상 인증된 사용자 */
  @Expose({ name: "medal" })
  public readonly medal: boolean;

  /** 방송중인 경우 나오는 방송주소  */
  @Expose({ name: "broad_no" })
  public readonly broadNo?: string | null;

  /** 뭔지모름... 아마도 아프리카 어플 실행 스킴인듯 */
  @Expose({ name: "scheme" })
  public readonly scheme?: string | null;

  constructor(
    userId: string,
    userNick: string,
    stationLogo: string | null,
    medal: boolean,
    broadNo: string | null,
    scheme: string | null,
  ) {
    this.userId = userId;
    this.userNick = userNick;
    this.stationLogo = stationLogo;
    this.medal = medal;
    this.broadNo = broadNo;
    this.scheme = scheme;
  }
}
