function numberToArray(startValue, stringOrEndValue = null, seperator = null) {
  if (stringOrEndValue === true) {
    return start.split(seperator);
  } else {
    let end = stringOrEndValue || startValue;
    let init = stringOrEndValue ? startValue : 0;
    let result = [];
    for (let i = init; i <= end ; i += 1) {
      console.log('i', i);
      result = result.concat(i);
    }
    return result;
  }
}

module.exports = {
  numberToArray,
}