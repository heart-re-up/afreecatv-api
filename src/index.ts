import { bj, scketc } from "./model/api/hosts";
import { getBjStation } from "./model/api/bj/getBjStation";
import { searchHistory } from "./model/api/scketc/searchHistory";

export { Board } from "./model/api/bj/station/Board";
export { BjStation } from "./model/api/bj/station/BjStation";
export { Broadcast } from "./model/api/bj/station/Broadcast";
export { Display } from "./model/api/bj/station/Display";
export { Group } from "./model/api/bj/station/Group";
export { Sns } from "./model/api/bj/station/Sns";
export { Station } from "./model/api/bj/station/Station";
export { Subscription } from "./model/api/bj/station/Subscription";
export { TopUser } from "./model/api/bj/station/TopUser";
export { BroadcastCenterInfo } from "./model/api/bj/station/BroadcastCenterInfo";
export { ISuggestBj } from "./model/api/scketc/ResponseSearchHistory";

export function api() {
  return {
    bj: { getBjStation: getBjStation(bj) },
    etc: { searchHistory: searchHistory(scketc) },
  };
}
