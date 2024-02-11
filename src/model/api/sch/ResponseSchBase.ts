export default interface ResponseSchBase {
  charset: string;
  result: number; // 1 이 성공같다.
  t: string; // 데이터 타입. json 등등
}
