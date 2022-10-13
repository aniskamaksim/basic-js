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
  console.log("members is " + members);
  console.log("type is " + typeof members);
  if (typeof(members) == null || typeof(members) == undefined || typeof(members) == 'number' || typeof(members) == Boolean ) {
    return false;
  } else {
  let result = members.map((word) => word[0]).join('');
  console.log('result is ' + result);
  }
}

module.exports = {
  createDreamTeam
};
