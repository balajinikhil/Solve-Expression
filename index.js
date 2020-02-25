const fs = require("fs");
let obj = fs.readFileSync("./file.json", "UTF-8");
const checkOperator = require("./utils/checkOperator");
const convertSign = require("./utils/convertSign");
const prefixInfix = require("./utils/prefixInfix");
const rmvString = require("./utils/rmvString");

//to replace the text with operators
obj = obj.replace("equal", "=");
obj = obj.replace("add", "+");
obj = obj.replace("subtract", "-");
obj = obj.replace("multiply", "*");
obj = JSON.parse(obj.replace("divide", "/"));

//destructre object and get all the elements as an array
let arr = [];
const destructureObj = obj => {
  for (let i in obj) {
    if (typeof obj[i] == "object") {
      destructureObj(obj[i]);
    } else {
      arr.push(obj[i]);
    }
  }
  return arr;
};

const solve = (rhs, exp) => {
  let poo = [];
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
        poo.push(
          convertSign(exp[i]) + exp[i - 1] + ")" + convertSign(exp[i + 1])
        );
        i++;
      } else if (checkOperator(exp[i])) {
        poo.push(convertSign(exp[i]) + exp[i - 1]);
      } else {
        poo.push(exp[i]);
      }
    }
    return "(" + rhs + poo.join("");
  }
  return rhs + exp.slice(0, exp.length - 1);
};

//Solving

//1.CONVERTS OBJECT INTO ARRAY OF ELEMENTS
let foo = destructureObj(obj);
//2.CONVERTS INTO EXPRESSION USING PREFIX
let expression = prefixInfix(foo);
console.log(expression);

//SOLVING LHS AND RHS
let lhs = expression.split("=")[0];
let rhs = expression.split("=")[1].trim();
let value = solve(rhs, lhs);
console.log("x = " + value);
console.log("x = ", eval(value));
