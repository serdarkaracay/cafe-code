const assert = require("chai").assert;

function firstNonRepeated(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    string.substring(i, string.length);

    if (
      string.substring(i + 1, string.length).indexOf(c) == -1 &&
      string.substring(0, i).indexOf(c) == -1
    ) {
      console.log(c);
      return c;
    }
  }
  return null;
}

describe("Fixed tests", function () {
  it("Testing for aaaaaabbbsasdweqwe", () =>
    assert.strictEqual(firstNonRepeated("aaaaaabbbsasdweqwe"), "d"));
  it("Testing for test", () =>
    assert.strictEqual(firstNonRepeated("test"), "e"));
  it("Testing for teeter", () =>
    assert.strictEqual(firstNonRepeated("teeter"), "r"));
  it("Testing for 1122321235121222", () =>
    assert.strictEqual(firstNonRepeated("1122321235121222"), "5"));
  it("Testing for rend", () =>
    assert.strictEqual(firstNonRepeated("rend"), "r"));
});
