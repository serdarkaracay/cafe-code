function change(string) {
  if (string.length > 26) return searchLettersGreater26(string);
  else return searchLettersLess26(string);
}

function searchLettersLess26(string) {
  let result = "00000000000000000000000000".split("");

  string.split("").forEach((element) => {
    const code = element.toUpperCase().charCodeAt(0);
    if (code > 90 || code < 65) return;
    result[code - 65] = 1;
  });
  return result.join("");
}

function searchLettersGreater26(string) {
  string = string.toLowerCase();
  const code = "abcdefghijklmnopqrstuvwxyz";
  return code
    .split("")
    .map(function (c) {
      return string.indexOf(c) !== -1 ? 1 : 0;
    })
    .join("");
}

const assert = require("chai").assert;
describe("Fixed tests", function () {
  it("26 less", () =>assert.strictEqual(change("a **&  bZ"), "11000000000000000000000001"));
  it("26 greater", () =>assert.strictEqual(change("aaaaaaaaaaaaaaaaaaaaaaaaaaaa"), "10000000000000000000000000"));
   
});
