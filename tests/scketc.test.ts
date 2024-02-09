import afreecatvApi from "../src";

const {
  etc: { searchHistory },
} = afreecatvApi();

const searchTokens = ["wlgml1219", "sol3712", "dm0229", "devking"];
describe("scketc", () => {
  test("searchHistory", async () => {
    for (const token of searchTokens) {
      const result = await searchHistory(token);
      expect(result.history.searchToken).toBe(token);
      expect(result.suggestBj.find((e) => e.userId === token)?.userId).toBe(
        token,
      );
    }
  });
});
