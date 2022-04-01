function compareArrays(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2)
}

function advancedFilter(arr) {
  let resultArr;
  return arr
  .filter((e) => e > 0 && e % 3 == 0)
  .map((e) => e * 10)
}
