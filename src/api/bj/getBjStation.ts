import { plainToInstance } from "class-transformer";
import BjStation from "../../model/api/bj/station/BjStation";

const getBjStation = (host: string) => async (userId: string) => {
  // const res = await fetch('/api/get-main-data')
  // console.log('api test', res)
  const url = `${host}/api/${userId}/station`;
  const headers = {
    Authority: "bjapi.afreecatv.com",
    Accept: "application/json",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    // "Accept-Encoding": "gzip",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
  };
  const response = await fetch(url, { method: "GET", headers });
  const json = await response.json();
  if (response.ok) {
    return plainToInstance(BjStation, json as unknown);
  }
  throw new Error(json);
};
export default getBjStation;
