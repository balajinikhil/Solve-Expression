module.exports = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length === 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
