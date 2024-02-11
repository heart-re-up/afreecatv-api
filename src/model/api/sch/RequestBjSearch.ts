import RequestScketcBase from "../scketc/RequestScketcBase";

export default interface RequestBJSearch extends RequestScketcBase {
  szKeyword: string; // 검색어인듯
  szOrder: "accur";
  /** 페이지 엘리먼트 개수. */
  nListCnt: number;
  /** 페이지 번호. 1부터 시작합니다. */
  nPageNo: number;
  location: "total_search";
  tab: "bj";
}
