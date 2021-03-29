const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let letters = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trim();
      letters.push(members[i][0].toUpperCase());
    };
  };
  return letters.sort().join('');
};
