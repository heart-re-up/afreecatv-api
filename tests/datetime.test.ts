import { DateTime } from "luxon";

describe("luxon", () => {
  test("toString", () => {
    const now = DateTime.now();
    console.log(now.toISO());
    console.log(now.toRFC2822());
    console.log(now.toSQL());
  });
});
