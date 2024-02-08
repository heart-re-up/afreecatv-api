import { api } from "../src";

const {
  bj: { getBjStation },
} = api();
describe("getBjStation", () => {
  test("get", async () => {
    const result = await getBjStation("wlgml1219");
    console.log(JSON.stringify(result, null, 4));
  });
});
