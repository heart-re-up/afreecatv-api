import { plainToInstance } from "class-transformer";
import ResponseSearchHistory from "../../model/api/scketc/ResponseSearchHistory";
import RequestBJSearch from "../../model/api/sch/RequestBjSearch";

const bjSearch = (host: string) => async (text: string) => {
  const body: RequestBJSearch = {
    v: "1.0",
    m: "bjSearch",
    w: "webm",
    isMobile: "true",
    szKeyword: encodeURIComponent(text),
    szOrder: "accur", // szOrderByColumn
    tab: "bj", // 현재 검색이 발생한 탭. 탭은 아프리카 페이지에 존재한다
  };
  const url = `${host}/api.php`;
  const headers = {
    Accept: "application/json",
  };
  const response = await fetch(url, { method: "GET", headers });
  const json = await response.json();
  return plainToInstance(ResponseSearchHistory, json as unknown);
};

export default bjSearch;
