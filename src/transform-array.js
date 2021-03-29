const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error('Err!');
    let param = [
      din = "--discard-next",
      dip = "--discard-prev",
      don =  "--double-next",
      dop =  '--double-prev' 
     ];
     let res = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == din){
            i++;
        } else if (arr[i]== dip && arr[i-2] != din){
            res.pop();
        } else if (arr[i]== don && arr[i+1] != undefined) {
            res.push(arr[i+1]);
        } else if (arr[i]== dop && arr[i-1] != undefined && arr[i-2] != din) {
            res.push(arr[i-1]);
        } else if (!param.includes(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
};
