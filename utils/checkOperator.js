module.exports = x => {
  if (x == "+" || x == "-" || x == "/" || x == "*" || x == "=") {
    return true;
  } else {
    return false;
  }
};
