const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let result = [];

  names.forEach((el, i) => {
    let arrOfSame = names.slice(0, i);
    if (arrOfSame.length > 0 && arrOfSame.includes(el)) {
      result.push(el + `(${arrOfSame.lastIndexOf(el) + 1})`);
    } else if (arrOfSame.length > 0 && result.includes(el)) {
      result.push(el + `(${result.lastIndexOf(el)})`);
      
    } else { result.push(el) };
  })
    return result;
}

module.exports = {
  renameFiles
};
