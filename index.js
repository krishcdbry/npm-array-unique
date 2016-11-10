'use strict'

/**
 * Which receives array as a input and returns the unique array and also an object whith array items and there occurences
 *
 * @module npm-array-unique
 * @typicalname arrayUnique
 * @example
 * var unique = require('npm-array-unique')
 */

exports.unique = unique;
exports.uniqueCount = uniqueCount;
exports.itemCount = itemCount;


/**
 * @name unique
 * @typicalname unique
 * @param {array} arrData  - Input array data
 * @return {array/string}
 *
 * @usage
 * var arrayUnique = require('npm-array-unique')
 * var inputArray = [1,2,3,4,3,2,4,3,4,5,4,5,5];
 *
 * arrayUnique.unique(inputArray);
 * // [ 1, 2, 3, 4, 5]
 *
 */
function unique(inputArr) {
	var uniqueArr = [];

	if (Object.prototype.toString.call(inputArr) !== '[object Array]') {
		return "Not a valid array";
	}

	inputArr.map(function(item) {
		if (uniqueArr.indexOf(item) === -1) {
			uniqueArr.push(item);
		}
	});

	return uniqueArr;
}

/**
 * @name itemCount
 * @typicalname itemCount
 * @param {array} arrData  - Input array data
 * @param {int/string} inputItem
 * @param {int} count
 * @return {int/string} count
 *
 * @usage
 * var arrayUnique = require('npm-array-unique')
 * var inputArray = [1,2,3,4,2,3,4,2,3,4,5,6,7,8,9,0,6,7,8,9];
 *
 * arrayUnique.itemCount(inputArray, 7);
 * // 2
 *
 */
function itemCount(inputArr, needle, count) {

	if (Object.prototype.toString.call(inputArr) !== '[object Array]') {
		return "Not a valid array";
	}

	var cloneArr = inputArr.slice();
	var count = (count) ? count : 0;
	var idx = cloneArr.indexOf(needle);

	if (idx == -1) {
		return count;
	}
	else {
		count += 1;
		cloneArr.splice(idx, 1);
		return itemCount(cloneArr, needle, count);
	}
}

/**
 * @name unique
 * @typicalname unique
 * @param {array} arrData  - Input array data
 * @return {array/string}
 *
 * @usage
 * var arrayUnique = require('npm-array-unique')
 * var inputArray = [1,2,3,4,4,4,4,5,6,7,7,8,8,8];
 *
 * arrayUnique.uniqueCount(inputArray);
 * // { '1': 1, '2': 1, '3': 1, '4': 4, '5': 1, '6': 1, '7': 2, '8': 3 }
 *
 */
function uniqueCount(inputArr) {

	if (Object.prototype.toString.call(inputArr) !== '[object Array]') {
		return "Not a valid array";
	}

	var cloneArr = inputArr.slice();
	var uniqueOccurrences = {};

	cloneArr.map(function(item) {
		uniqueOccurrences[item] = itemCount(cloneArr, item);
	});

	return uniqueOccurrences;
}
