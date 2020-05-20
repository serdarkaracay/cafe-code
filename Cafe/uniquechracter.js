function solve(a, b) {
  let result = "";

  a.split("").forEach((element) => {
    if (b.includes(element)) return;
    result += element;
  });

  b.split("").forEach((element) => {
    if (a.includes(element)) return;
    result += element;
  });

  return result;
}

const Test = require("chai").assert;
describe("Basic tests", function () {
it("1", () =>Test.strictEqual(solve("xyab", "xzca"), "ybzc"));
it("2", () =>Test.strictEqual(solve("xyabb", "xzca"), "ybbzc"));
it("3", () =>Test.strictEqual(solve("abcd", "xyz"), "abcdxyz"));
it("4", () =>Test.strictEqual(solve("xxx", "xzca"), "zca"));
});

