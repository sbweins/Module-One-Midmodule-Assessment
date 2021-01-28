/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/
function firstAndLastAverage(arr) {
  let lastVal = arr.length - 1 
  if (arr.length < 2) {
    return null
  }

  let arrAvg = (arr[0] + arr[lastVal]) / 2
  return arrAvg
  }

/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/
function duplicateArray(arr) {
  let arr2 = arr
  arr = arr2.concat(arr)
  return arr
}

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) {
arr.splice (0,3)
return arr
}

// Another way:
// let newArray = arr.slice(3)
// return newArray
// }

// array methods
// .slice ()
// .splice ()
// .shift ()
// can do for loop start index at 3

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
