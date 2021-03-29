const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1; // минимальное число ходов - 2^n − 1, где n — число дисков(discNumber)
  let seconds = Math.floor(turns / (turnsSpeed / 3600)); //3600 сек = 1 час
  let obj =  {
    turns: turns,
    seconds: seconds
  };
  return obj;
};
