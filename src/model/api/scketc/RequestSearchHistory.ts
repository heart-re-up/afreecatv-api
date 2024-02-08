declare type Method = "searchHistory";
declare type IsMobile = "true" | "false";

export interface RequestSearchHistory {
  [key: string]: string;

  m: Method;
  isMobile: IsMobile;
  w: string; // webm
  v: string; // 버전
  service: string;
  d: string; // 검색어인듯
}
