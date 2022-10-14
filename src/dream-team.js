const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log("input is: " + members)
  if(members == null || !(members instanceof Object) || members == '[object Object]') {
    return false;
  }
  let result = [];
  for (element of Object.values(members)) {
    if (typeof(element) === 'string') {
      element = element.split('').join('').trim();
      result.push(element[0].toUpperCase());
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      console.log('result is: ' + result);
      
    }
  };

  result = result.sort();
  return result.join('');
}

module.exports = {
  createDreamTeam
};
