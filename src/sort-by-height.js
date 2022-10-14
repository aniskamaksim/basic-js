const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	console.log(typeof arr)
	let keepPlace = [];
	let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
	if (arr[i] == '-1') {
		keepPlace += i;
		console.log('keepPlace: ' + keepPlace);
	} else {
		if (arr[i] > arr[i + 1]) {
			// temp Ц временна€ константа дл€ хранени€ текущего элемента
			const temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
		}
	result += arr[i]; 
	}
	console.log ('result is:' + result)
	console.log ('type of result is: ' + typeof result)
  }
  function sortInOrder (a, b) {
	return a - b;
  }
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log ('result is:' + result)
  console.log ('type of result is: ' + typeof result)
orderResult = result.split(',').sort(sortInOrder);
console.log ('type of orderResult is: ' + typeof orderResult)
console.log('result after order: ' + orderResult);
}

module.exports = {
  sortByHeight
};
