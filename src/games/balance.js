
import start from '../start';
import { getRandomInt } from '../lib';

const rulesMessage = 'Balance the given number.';

const limitMaxNumber = 1000;

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

  return +output.reverse().join('');
};

const getQuestionAnswerPair = () => {
  const question = getRandomInt(limitMaxNumber);
  const correctAnswer = balance(question).toString();

  return { question, correctAnswer };
};

export default () => start(rulesMessage, getQuestionAnswerPair);
