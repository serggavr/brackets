module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let conf = {}
  for (let i = 0; i < bracketsConfig.length; i++) {
    conf[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(conf).includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (Object.keys(conf).find(key => conf[key] === str[i]) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length >= 2) {
      for (let i = 0; i < stack.length; i++) {
    if (Object.keys(conf).find(key => conf[key] === stack[i]) === stack[i]) {
        stack.splice(0, 2);
      }

    }
  return stack.length === 0;
  }
}
