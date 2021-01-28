/** Returns every even number from 0 to a given number
* @param {number} num - The number to iterate up to
* @param {number[]} - An array of even numbers from 0 to {num}
*/
function evenNumbers(num) {
  let arr = []
  let i = 0
  while (i <= num){
    if (i % 2 === 0) {      
      arr.push(i)    
      i++
    } else {
      i++
    }
  }    
  return arr
}

console.log(evenNumbers([1,2,3,4,5,6,7,8,9]))

/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ...etc ] until 1000
* @param {number} num - The number to find multiples of
* @returns {number[]} - An array of all multiples of {num} up to 1000
*/
function multiplesToOneThousand(num) {
  let arr = []
  let i = 0
  let max = 1000
  while (i <= max){
    arr.push(i)
    i += num
  }
  return arr
}

/** Returns the first n powers of 2 (starting at 0)
* Sample input: 6
* Sample output: [1,2,4,8,16,32]
* This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
* @param {number} count - How many powers of two to find
* @returns {number[]} - An array with the first {count} powers of two
*/
function powersOfTwo(count) {
  let arr = []
  let i = 0
  while (i < count){
    arr.push(2 ** i)
    i ++
  }
return arr
}

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo
}