export interface ResponseSearchHistory {
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

  suggest_bj: ISuggestBj[];
}

export interface ISuggestBj {
  /** 사용자 아이디 */
  user_id: string;

  /** 사용자 별명 */
  user_nick: string;

  /** 방송국 로고 */
  station_logo?: string | null;

  /** 베스트 BJ 이상 인증된 사용자 */
  medal: boolean;

  /** 방송중인 경우 나오는 방송주소  */
  broad_no?: string | null;

  /** 뭔지모름... 아마도 아프리카 어플 실행 스킴인듯 */
  scheme?: string | null;
}
