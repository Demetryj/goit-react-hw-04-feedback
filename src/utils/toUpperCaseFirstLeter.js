function toUpperCaseFirstLeter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);

  // const splitted = word.split('');

  // const first = splitted[0].toUpperCase();

  // const rest = [...splitted];

  // rest.splice(0, 1);

  // const result = [first, ...rest].join('');
}

export default toUpperCaseFirstLeter;
