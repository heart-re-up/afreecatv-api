import { bj, scketc } from "./model/api/hosts";
import { getBjStation } from "./model/api/bj/getBjStation";
import { searchHistory } from "./model/api/scketc/searchHistory";

export { ISuggestBj } from "./model/api/scketc/ResponseSearchHistory";

export function api() {
  return {
    bj: { getBjStation: getBjStation(bj) },
    etc: { searchHistory: searchHistory(scketc) },
  };
}
