import SuggestBj from "./SuggestBj";

export default interface ResponseSearchHistory {
  /** 호출 결과 성공 여부로 추측. 1 이면 성공 같음. */
  result: number;

  /** 요청 내용 반환인듯? */
  history: {
    isActive: number;
    /** 검색어인듯 */
    d: string;
  };

  /** 결과 컨텐츠의 문자셋 */
  charset: string;

  /** 결과 컨텐츠의 컨텐츠 타입 */
  t: string;

  suggest_bj: Array<SuggestBj>;
}
