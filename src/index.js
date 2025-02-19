module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '{', '[', '|'];
  const bracketPair = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['|']: '|',
  }
  
  if (str.length % 2 !== 0) return false;
  if (str.length == 0) return true;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length == 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if (bracketPair[currentSymbol] == topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;// your solution
}
