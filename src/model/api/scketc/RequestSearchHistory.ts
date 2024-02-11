import RequestScketcBase from "./RequestScketcBase";

export default interface RequestSearchHistory extends RequestScketcBase {
  service: string; // list
  d: string; // 검색어인듯
}
