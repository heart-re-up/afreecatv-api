import { bj, scketc } from "./api/hosts";
import getBjStation from "./api/bj/getBjStation";
import searchHistory from "./api/scketc/searchHistory";

export * from "./model/api";

export default function afreecatvApi() {
  return {
    bj: { getBjStation: getBjStation(bj) },
    etc: { searchHistory: searchHistory(scketc) },
  };
}
