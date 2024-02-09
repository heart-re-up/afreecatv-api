import afreecatvApi from "../src";

const {
  etc: { searchHistory },
} = afreecatvApi();
describe("scketc", () => {
  test("searchHistory", async () => {
    const result = await searchHistory("wlgml1219");
    console.log(JSON.stringify(result, null, 4));
    // result.station.groups.forEach(console.log);
    // result.station.sns.forEach(console.log);
    // console.log("===========vods");
    // result.station.vods.forEach((e) => console.log(e.name));
    // console.log("===========menus");
    // result.station.menus.forEach((e) => console.log(e.name));
  });
});
