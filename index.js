function numberToArray(startValue, stringOrEndValue = null, seperator = null) {
  if (stringOrEndValue === true) {
    return startValue.split(seperator);
  } else {
    let end = stringOrEndValue || startValue;
    let init = stringOrEndValue ? startValue : 0;
    let result = [];
    for (let i = init; i <= end ; i += 1) {
      result = result.concat(i);
    }
    return result;
  }
}

module.exports = {
  numberToArray,
}