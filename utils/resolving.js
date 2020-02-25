module.exports = (rhs, exp) => {
  let s = [];
  exp = exp
    .split(" ")
    .join(",")
    .replace(/[\s''x()]/g, "")
    .split(",");
  exp = rmvString(exp);
  let length = exp.length;
  if (length > 3) {
    for (let i = 1; i < length; i++) {
      // check if symbol is operator
      if (checkOperator(exp[i]) && checkOperator(exp[i + 1])) {
        s.push(
          convertSign(exp[i]) + exp[i - 1] + ")" + convertSign(exp[i + 1])
        );
        i++;
      } else if (checkOperator(exp[i])) {
        s.push(convertSign(exp[i]) + exp[i - 1]);
      } else {
        s.push(exp[i]);
      }
    }
    return "(" + rhs + s.join("");
  }
  return rhs + exp.slice(0, exp.length - 1);
};
