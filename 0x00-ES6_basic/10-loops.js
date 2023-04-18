export default function appendToEachArrayValue(array, appendString) {
  // use ES6’s for...of operator
  // eslint-disable-next-line no-restricted-syntax
  for (const element of array) {
    // use the array’s indexOf method to get the index of the current element
    const index = array.indexOf(element);
    // use the array’s splice method to replace the current element
    array.splice(index, 1, appendString + element);
  }
  return array;
}
