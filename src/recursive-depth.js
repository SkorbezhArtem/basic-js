const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
      if (!Array.isArray(arr)) {
        return 0;
      }
      let depth = 0;
      for (let i of arr)
        depth = Math.max(depth, this.calculateDepth(i));
      return ++depth;
  }
};