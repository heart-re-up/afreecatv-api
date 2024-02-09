import afreecatvApi from "../src";

const {
  bj: { getBjStation },
} = afreecatvApi();

const searchTokens = ["wlgml1219", "sol3712", "dm0229", "devking"];
describe("getBjStation", () => {
  test("get", async () => {
    for (const token of searchTokens) {
      const result = await getBjStation(token);
      expect(result.station.userId).toBe(token);
    }
  });
});
