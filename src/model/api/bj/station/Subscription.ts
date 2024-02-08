import { Expose } from "class-transformer";

export class Subscription {
  @Expose({ name: "count" })
  public readonly count: number; // 0

  constructor(count: number) {
    this.count = count;
  }
}
