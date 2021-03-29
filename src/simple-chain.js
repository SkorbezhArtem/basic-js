const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value + '') {
      this.chain.push('( ' + (value + '') + ' )');
      return this;
    }
    this.chain.push('( )');
    return this;
  },
  removeLink(position) {
    if(!this.chain[position] || position % 1 !== 0){
      this.chain = [];
      throw Error('Err!');
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chained = this.chain.join('~~');
    this.chain = [];
    return chained;
  }
};

module.exports = chainMaker;
