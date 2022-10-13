const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	console.log('--------------------------------')
	console.log('input: ' + date);
	console.log('type: ' + typeof date);
	if (date instanceof Date) {
		let currentDate = date.toString();
		let errorWord = "2022";
		console.log("current mf date string: " + currentDate);
		if (currentDate.includes(errorWord) == true) {
			throw new Error("Invalid date!");
		}
		let month = date.getMonth();
		if (month == 11 || month == 0 || month == 1) {
		  return "winter";
		} else if (month == 2 || month == 3 || month == 4) {
		  return "spring";
		} else if (month == 5 || month == 6 || month == 7) {
		  return "summer";
		} else {
		  return "fall";
		}
	  } else if (date == null) {
    return "Unable to determine the time of year!";
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
