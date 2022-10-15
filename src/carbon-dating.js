const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  console.log('~~~~~~~~~~~~~ typeof: ' + typeof sampleActivity);
  console.log('~~~~~~~~~~~~~ input: ' + sampleActivity);
  if(typeof sampleActivity !== 'string' || isNaN(sampleActivity) == true) {
    return false;
  }
  let result = 0;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let numSampleActivity = +sampleActivity;
  if (numSampleActivity <=0 || numSampleActivity >= 9000){
    return false;
  } else {
  let time = (Math.log((MODERN_ACTIVITY / numSampleActivity))) / k;
  result = Math.ceil(time);
  if (result < 0) {
    return false;
  } else {
    return result;
  }
}
}

module.exports = {
  dateSample
};
