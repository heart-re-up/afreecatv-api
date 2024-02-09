import "reflect-metadata";
import { Expose } from "class-transformer";

export default class Subscription {
  @Expose({ name: "count" })
  public readonly count: number; // 0

  constructor(count: number) {
    this.count = count;
  }
}
