const checkOperator = require("./checkOperator");

module.exports = exp => {
  let arr = [];
  for (let i = exp.length - 1; i >= 0; i--) {
    if (checkOperator(exp[i])) {
      let solu1 = arr[arr.length - 1];
      arr.pop();
      let solu2 = arr[arr.length - 1];
      arr.pop();

      let txt = "";

      if (i <= 1) {
        txt = `${solu1}  ${exp[i]} ${solu2}`;
      } else {
        txt = `(  ${solu1} ${exp[i]}  ${solu2} )`;
      }
      arr.push(txt);
    } else {
      arr.push((1, exp[i]));
    }
  }
  return arr[arr.length - 1];
};
