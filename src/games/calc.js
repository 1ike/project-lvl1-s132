import start from '../start';
import { getRandomInt, getRandomPairInt } from '../lib';

const rulesMessage = 'What is the result of the expression?';

const getQuestion = () => {
  const { a, b } = getRandomPairInt(30);

  const dice = getRandomInt(3);
  let operator = '';
  switch (dice) {
    case 0:
      operator = '+';
      break;
    case 1:
      operator = '-';
      break;
    default:
      operator = '*';
      break;
  }

  return a + operator + b;
};

// const getCorrectAnswer = question => eval(question).toString();
const getCorrectAnswer = (questValue) => {
  let result;
  const arr = questValue.match(/(\d+)(\D)(\d+)/);

  switch (arr[2]) {
    case '+':
      result = +arr[1] + +arr[3];
      break;
    case '-':
      result = +arr[1] - +arr[3];
      break;
    default:
      result = +arr[1] * +arr[3];
      break;
  }

  return result.toString();
};

start(rulesMessage, getQuestion, getCorrectAnswer);
