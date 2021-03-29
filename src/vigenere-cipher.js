const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Error: message or key!');
    let str = '';
    let x = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        str += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(x % key.length) - 130) % 26 + 65);
        x++;
      }
      else str += message[i];
    }
    return(this.direct) ? str : str.split('').reverse().join('');  
  }    
  decrypt(message, key) {
    if (!message || !key) throw new Error('Error: message or key!');
    let str = '';
    let x = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        str += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(x % key.length)) % 26 + 65);
        x++;
      }
      else str += message[i];
    }
    return(this.direct) ? str : str.split('').reverse().join('');  
  }
}
module.exports = VigenereCipheringMachine;
