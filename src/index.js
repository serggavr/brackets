module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let conf = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    conf[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(conf).includes(str[i])) {
      console.log(stack[stack.length - 1])
      console.log(str[i])
      if (stack.length >= 1 && (stack[stack.length - 1] === Object.keys(conf).find(key => conf[key] === str[i]))) {
        stack.pop()
        } else {
          stack.push(str[i]);}
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
  return stack.length === 0;

};
