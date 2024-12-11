// 测试用例 
// var expect = chai.expect;
var assert = chai.assert;

describe("获取json合并测试", function () {
  it("无重复key", async function () {
    const expected = {
      A: "a",
      B: "b",
      C: "c"
    }
    const result = await merge('A.json', 'B.json', 'C.json');
    assert.deepStrictEqual(result, expected);
  });
  it("相同key 原始类型", async function () {
    const expected = { A: 'a', B: "b" };
    const result = await merge('A.json', 'B.json', 'Bcopy.json');
    assert.deepStrictEqual(result, expected);
  });

  it("相同key 数组", async function () {
    const expected = {
      "A": [
        "a",
        "a",
        "a"
      ],
      "B": [
        "b",
        "b",
        "b",
        "c",
        "c",
        "c"
      ]
    };
    const result = await merge('arrA.json', 'arrB.json', 'arrC.json');
    assert.deepStrictEqual(result, expected);
  });

  it("相同key 对象", async function () {
    const expected = {
      "A": {
        "a": {
          "a": "a"
        }
      },
      "B": {
        "b": {
          "b": "b"
        },
        "c": {
          "c": "c"
        }
      }
    };
    const result = await merge('objectA.json', 'objectB.json', 'objectC.json');
    assert.deepStrictEqual(result, expected);
  });
  it("相同key 不同类型", async function () {
    const expected = {
      "A": "a",
      "B": "b"
    };
    const result = await merge('A.json', 'B.json', 'objectC.json');
    assert.deepStrictEqual(result, expected);
  });
  it("相同key 空值", async function () {
    const expected = {
      "A": "a",
      "B": "b"
    };
    const result = await merge('A.json', 'B.json', 'emptyB.json');
    assert.deepStrictEqual(result, expected);
  });
});
