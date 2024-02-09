import RequestSearchHistory from "../../model/api/scketc/RequestSearchHistory";
import ResponseSearchHistory from "../../model/api/scketc/ResponseSearchHistory";

const searchHistory = (host: string) => async (text: string) => {
  const queries: RequestSearchHistory = {
    isMobile: "true",
    service: "list",
    m: "searchHistory",
    w: "webm",
    v: "2.0",
    d: text,
  };
  const params = new URLSearchParams(queries);
  const url = `${host}/api.php?${params.toString()}`;
  const headers = {
    Accept: "application/json",
  };
  const response = await fetch(url, { method: "GET", headers });
  const json = await response.json();
  return json as ResponseSearchHistory;
};

export default searchHistory;
