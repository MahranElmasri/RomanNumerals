export default function checkValidator(roman) {
  const regEx = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$|^\d+$/;
  var isValid = regEx.test(roman);
  return isValid ? true : false;
}
