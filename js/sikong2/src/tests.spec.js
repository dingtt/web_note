// 测试用例 
var assert = chai.assert;

describe('多边形顶点简化', function () {
  describe("异常", function () {
    it("两个点", function () {
      const expected = []
      assert.deepStrictEqual(simplyPolygon([
        {
          x: 0,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
      ]), expected);
    });

    it("全部一样的点", function () {
      const expected = []
      assert.deepStrictEqual(simplyPolygon(
        Array(Math.ceil(Math.random() * 10)).fill({
          x: 1,
          y: 1,
        })
      ), expected);
    });

    it("全部共线的点", function () {
      const expected = []
      assert.deepStrictEqual(simplyPolygon(
        Array.from({ length: Math.ceil(Math.random() * 10) }, (_, index) => ({ x: index, y: index }))
      ), expected);
    });

  })

  describe("多边形", function () {
    it("三角形", function () {
      const expected = [{
        x: 0,
        y: 0,
      },
      {
        x: 1,
        y: 0,
      }, {
        x: 0,
        y: 1
      }]
      assert.deepStrictEqual(simplyPolygon(expected), expected);
    });

    it("正方形", function () {
      const expected = [
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: 1,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 0,
        }
      ]
      assert.deepStrictEqual(simplyPolygon(expected), expected);
    });

    it("凸多边形", function () {
      const expected = [
        {
          x: 0,
          y: 0,
        },
        {
          x: 1,
          y: 0,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 0.5,
          y: 1.5,
        },
        {
          x: 0,
          y: 1,
        }
      ]
      assert.deepStrictEqual(simplyPolygon(expected), expected);
    });

    it("凹多边形", function () {
      const expected = [
        {
          x: 0,
          y: 0,
        },
        {
          x: 1,
          y: 0,
        },
        {
          x: 0.5,
          y: 0.5,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 0,
          y: 1,
        }
      ]
      assert.deepStrictEqual(simplyPolygon(expected), expected);
    });
  })

  describe("重复点", function () {
    it("相邻重复点", function () {
      const original = [
        {
          x: -1,
          y: -2,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 2,
          y: 0,
        },
      ]
      const expected = [
        {
          x: -1,
          y: -2,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 2,
          y: 0,
        },
      ]
      assert.deepStrictEqual(simplyPolygon(original), expected);
    });
  })

  describe("重复点容差", function () {
    it("距离容差内", function () {
      const original = [
        {
          x: -1,
          y: -2,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 1.0001,
        },
        {
          x: 2,
          y: 0,
        },

      ]
      const expected = [
        {
          x: -1,
          y: -2,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 2,
          y: 0,
        },

      ]
      assert.deepStrictEqual(simplyPolygon(original), expected);
    });
    it("距离容差外", function () {
      const original = [
        {
          x: -1,
          y: -2,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 1.01,
        },
        {
          x: 2,
          y: 0,
        },

      ]
      const expected = [
        {
          x: -1,
          y: -2,
        },
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 1.01,
        },
        {
          x: 2,
          y: 0,
        },

      ]
      assert.deepStrictEqual(simplyPolygon(original), expected);
    });
  })


  describe("共线点", function () {
    it("连续3个点共线", function () {
      const original = [
        {
          x: -1,
          y: -2,
        },
        ...Array.from({ length: 3 }, (_, index) => ({ x: index, y: index })),
        {
          x: 4,
          y: -2,
        },
      ]
      const expected = [
        {
          x: -1,
          y: -2,
        },
        {
          x: 0,
          y: 0
        },
        {
          x: 2,
          y: 2
        },
        {
          x: 4,
          y: -2,
        },
      ]
      assert.deepStrictEqual(simplyPolygon(original), expected);
    });
    it("连续多点共线", function () {
      const original = [
        {
          x: -1,
          y: -2,
        },
        ...Array.from({ length: 4 }, (_, index) => ({ x: index, y: index })),
        {
          x: 5,
          y: 0,
        },
        {
          x: 6,
          y: -1,
        },
      ]
      const expected = [
        {
          x: -1,
          y: -2,
        },
        {
          x: 0,
          y: 0,
        },
        {
          x: 3,
          y: 3
        },
        {
          x: 5,
          y: 0,
        },
        {
          x: 6,
          y: -1,
        },
      ]
      assert.deepStrictEqual(simplyPolygon(original), expected);
    });
  })

  describe("边界", function () {
    it("数组首尾点相同", function () {
      const original = [
        {
          x: 0,
          y: 0,
        },
        {
          x: 1,
          y: 2
        }, {
          x: 2,
          y: 1
        },
        {
          x: 0,
          y: 0,
        },
      ]
      const expected = [
        {
          x: 1,
          y: 2
        }, {
          x: 2,
          y: 1
        },
        {
          x: 0,
          y: 0,
        },
      ]
      assert.deepStrictEqual(simplyPolygon(original), expected);
    });
  })
})





