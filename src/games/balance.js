
import start from '../start';
import { getRandomInt } from '../lib';

const RULES_MESSAGE = 'Balance the given number.';

const LIMIT_MAX_NUMBER = 1000;

const balance = (num) => {
  const str = num.toString();

  const input = str.split('');
  const inputLength = input.length;
  const inputDigit = input.map(val => +val);
  const sum = inputDigit.reduce((acc, val) => acc + val, 0);
  const evenDigit = Math.floor(sum / inputLength);
  let remainder = sum % inputLength;

  const output = [];
  while (remainder > 0) {
    output.push(evenDigit + 1);
    remainder -= 1;
  }
  while (inputLength > output.length) {
    output.push(evenDigit);
  }

  return output.reverse();
};

const getQA = () => {
  const question = getRandomInt(LIMIT_MAX_NUMBER);
  const correctAnswer = balance(question).join('');

  return { question, correctAnswer };
};

export default () => start(RULES_MESSAGE, getQA);
