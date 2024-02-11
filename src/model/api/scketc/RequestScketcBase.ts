declare type Method = "searchHistory" | "bjSearch";
declare type IsMobile = "true" | "false";
export default interface RequestScketcBase {
  [key: string]: string | number;

  m: Method;
  v: string; // 버전
  w: string; // webm
  isMobile: IsMobile;
}
