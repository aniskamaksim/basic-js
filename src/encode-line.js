const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 * 
 *
 */
function encodeLine(str) {
 let arr = str.split("");
  var count = [];
arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);
for( var i = 0; i < count.length; i++){
  if ( count[i] == ':') {
      count.splice(i, 1);
      i--;
      console.log('count is: ' + count);
  }
  console.log('count is: ' + count);
}
console.log('count is: ' + count);


}

module.exports = {
  encodeLine
};
