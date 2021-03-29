const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { 
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  let resStr = '';
  let additionStr = '';

  if (addition !== '') {
    additionStr = repeater(addition, 
      {repeatTimes: additionRepeatTimes,
      separator: additionSeparator});
  }

  if (repeatTimes > 0) resStr = str + additionStr;
  repeatTimes--;
  
  for (let i = 0; i < repeatTimes;) {
    resStr += (separator + str + additionStr);
    repeatTimes--;
  }
  return resStr;
};
  