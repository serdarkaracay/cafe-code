function points(games) {
  const firstValue = 0;
  return games.reduce((i, v) => {
    const [home, away] = v.split(":");
    debugger;
    if (home > away) return i + 3;
    if (home == away) return i + 1;
    return i;
  }, firstValue);
}

console.log(points([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ]))


const Test = require("chai").assert;
describe("Basic tests", function () {
  it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function () {
    Test.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
      ]),
      30
    );
  });
  it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function () {
    Test.strictEqual(
      points([
        "1:1",
        "2:2",
        "3:3",
        "4:4",
        "2:2",
        "3:3",
        "4:4",
        "3:3",
        "4:4",
        "4:4",
      ]),
      10
    );
  });
  it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function () {
    Test.strictEqual(
      points([
        "0:1",
        "0:2",
        "0:3",
        "0:4",
        "1:2",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      0
    );
  });
  it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function () {
    Test.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      15
    );
  });
  it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function () {
    Test.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:4",
        "2:2",
        "3:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      12
    );
  });
});
