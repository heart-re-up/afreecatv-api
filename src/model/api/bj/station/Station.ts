export interface Display {
  main_type: string;
  title_type: "IMAGE" | "HTML";
  title_text: string;
  profile_text: string;
  skin_type: number; // 0;
  skin_no: number; // 0;
  title_skin_image: string;
}

export interface Upd {
  station_no: number;
  user_id: string;
  asp_code: number;
  fan_cnt: number;
  today0_visit_cnt: number;
  today1_visit_cnt: number;
  total_visit_cnt: number;
  today0_ok_cnt: number;
  today1_ok_cnt: number;
  today0_fav_cnt: number;
  today1_fav_cnt: number;
  total_ok_cnt: number;
  total_view_cnt: number;
}

export interface Bbs {
  bbs_no: number; //  63419261,
  station_no: number; //  20068979,
  auth_no: number; //  101,
  w_auth_no: number; //  216,
  display_type: number; //  108,
  rnum: number; //  0,
  line: number; //  1,
  indention: number; //  0,
  name: string; //  '방송 다시보기',
  name_font: number; //  0,
  main_view_yn: number; //  0,
  view_type: number; //  1
}

export interface Group {
  idx: number; // 3906,
  group_no: number; // 3,
  priority: number; // 7,
  info: {
    group_name: string; // "뉴비존";
    group_class_name: string; // "badge_newbj";
    group_background_color: string; // "#fb4848";
  };
}

export interface Sns {
  id: number; // 4992;
  user_id: string; // "sol3712";
  type: number; // 2;
  channel_id: string; // "7268216076";
  playlist_id: string; // "";
  title: string; // "bj._.haru";
  followers: number; // 221000;
  state: number; // 0;
  expire_at: string; // "2024-02-22 05:03:14";
  created_at: string; // "2021-02-04 16:49:17";
  updated_at: string; // "2024-02-07 00:45:10";
}

export interface Station {
  display: Display;
  groups: Group[];
  menus: Bbs[];
  upd: Upd;
  vods: Bbs[];
  sns: Sns[];
  broad_start: string; // "2023-09-12 20:45:39";
  grade: number; // 0
  jointime: string; // "2018-12-25 00:21:25";
  station_name: string; // 'heart.re.up'
  station_no: number; // 20068979
  station_title: string; // ''
  total_broad_time: number; // seconds
  user_id: string; // 'devking'
  user_nick: string; // 'ㅎㅎㅎ'
  active_no: number; // 0
}
