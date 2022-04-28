const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  let result = '';
  let mainStr = str;
  let additionStr = '';

  if (options.addition !== undefined) {
      for (let i = 1; i <= options.additionRepeatTimes; i++) {
        additionStr += `${options.addition}${options.additionSeparator}`;
      };
      additionStr = additionStr.slice(0, additionStr.length - options.additionSeparator.length);
  }

  mainStr += additionStr;

  for (let x = 1; x <= options.repeatTimes; x++) {
    result += `${mainStr}${options.separator}`;
  };
  result = result.slice(0, result.length - options.separator.length);  

  return result;  
}

module.exports = {
  repeater
};
