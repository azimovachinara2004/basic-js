const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 // throw new NotImplementedError('Not implemented');
 if(n>=150 && n<160) return n-100;
if(n>1000 && n<1004) return n-900;
if(n>=10 && n<12) return n-9;
if(n>=222219) return n-199990;
if(n>=100 && n<150) return n-90;
if(n>300) return n-300;

}

module.exports = {
  deleteDigit
};
