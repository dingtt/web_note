/**
 * 生成所有有效的括号组合
 * @param {number} n - 括号对数
 * @return {string[]} - 所有有效的括号组合
 */
function generateParenthesis(n) {
  const result = [];

  /**
   * 递归生成括号组合
   * @param {string} current - 当前的括号组合
   * @param {number} open - 已放置的左括号数量
   * @param {number} close - 已放置的右括号数量
   */
  function generate(current, open, close) {
    // 当前括号组合长度达到2*n时，表示生成了一个有效组合
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    // 如果左括号数量小于n，可以继续放置左括号
    if (open < n) {
      generate(current + '(', open + 1, close);
    }
    // 如果右括号数量小于左括号数量，可以继续放置右括号
    if (close < open) {
      generate(current + ')', open, close + 1);
    }
  }

  // 从空字符串开始生成括号组合
  generate('', 0, 0);

  return result;
}

// 示例用法
const n = 2;
const combinations = generateParenthesis(n);
console.log(combinations);
