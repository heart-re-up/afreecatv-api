import { Station } from "./station/Station";
import { TopUser } from "./station/TopUser";
import { Subscription } from "./station/Subscription";

export interface Broad {
  user_id: string; // "wlgml1219",
  broad_no: number; // 253930757;
  broad_title: string; // "-녹방입니당!-";
  current_sum_viewer: number; // 10;
  broad_grade: number; // 0;
  is_password: boolean; // false;
}

export interface BjStation {
  profile_image: string;
  station: Station;
  broad: Broad | null;
  starballoon_top: TopUser[];
  sticker_top: TopUser[];
  subscription: Subscription;
  is_best_bj: boolean; //  false,
  is_partner_bj: boolean; //  false,
  is_sports_bj: boolean; //  false,
  is_ppv_bj: boolean; //  false,
  is_af_supporters_bj: boolean; //  false,
  is_shopfreeca_bj: boolean; //  false,
  is_favorite: boolean; //  false,
  is_subscription: boolean; //  false,
  is_owner: boolean; //  false,
  is_manager: boolean; //  false,
  is_notice: boolean; //  false,
  is_adsence: boolean; //  true,
  is_mobile_push: boolean; //  false,
  subscribe_visible: "on";
  country: "KR";
  current_timestamp: string; // '2024-02-07 14:03:24'
}
