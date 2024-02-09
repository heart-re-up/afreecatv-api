import "reflect-metadata";
import { Expose, Type } from "class-transformer";
import SuggestBj from "./SuggestBj";

export default class ResponseSearchHistory {
  /** 호출 결과 성공 여부로 추측. 1 이면 성공 같음. */
  @Expose({ name: "result" })
  public readonly result: number;

  /** 요청 내용 반환인듯? */
  @Type(() => History)
  @Expose({ name: "history" })
  public readonly history: History;

  /** 결과 컨텐츠의 문자셋 */
  @Expose({ name: "charset" })
  public readonly charset: string;

  /** 결과 컨텐츠의 컨텐츠 타입 */
  @Expose({ name: "t" })
  public readonly t: string;

  @Type(() => SuggestBj)
  @Expose({ name: "suggest_bj" })
  public readonly suggestBj: Array<SuggestBj>;

  constructor(
    result: number,
    history: History,
    charset: string,
    t: string,
    suggestBj: Array<SuggestBj>,
  ) {
    this.result = result;
    this.history = history;
    this.charset = charset;
    this.t = t;
    this.suggestBj = suggestBj;
  }
}

export class History {
  @Expose({ name: "isActive" })
  public readonly isActive: number;

  /** 검색어인듯 */
  @Expose({ name: "d" })
  public readonly searchToken: string;

  constructor(isActive: number, searchToken: string) {
    this.isActive = isActive;
    this.searchToken = searchToken;
  }
}
