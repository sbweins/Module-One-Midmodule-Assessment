/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  let ifNumber = typeof (val) === "number" || false
  return (ifNumber || false)
}

// Another way to do this:
// if (typeof val === "number") {
//   return true
// }
// else {
//   return false
// }

// another way
// return typeof val == "number"


/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  if (val){
    return true
  } else {
    return false
  }
}

//constructor value option
//return Boolean(value)

module.exports = {
  isNumber,
  isTruthy
}
