import afreecatvApi from "../src";

const {
  bj: { getBjStation },
} = afreecatvApi();
describe("getBjStation", () => {
  test("get", async () => {
    const result = await getBjStation("wlgml1219");
    console.log(JSON.stringify(result, null, 4));
  });
});
