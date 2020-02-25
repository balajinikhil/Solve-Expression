module.exports = o => {
  if (o == "+") {
    return "-";
  } else if (o == "-") {
    return "+";
  } else if (o == "*") {
    return "/";
  } else if (o == "/") {
    return "*";
  }
  // switch (op) {
  //     case "+":
  //         return "-";
  //         break;
  //     case "-":
  //         return "+";
  //         break;
  //     case "*":
  //         return "/";
  //         break;
  //     case "/":
  //         return "*";
  //         break;
  //     default:
  //         return op;
  // }
};
