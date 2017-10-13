import start from '../start';
import { getRandomInt, getRandomPairInt } from '../lib';

const RULES_MESSAGE = 'What is the result of the expression?';

const LIMIT_MAX_NUMBER = 30;
const LIMIT_DICE_FACES = 3;

const getQA = () => {
  // get question
  const { a, b } = getRandomPairInt(LIMIT_MAX_NUMBER);

  const dice = getRandomInt(LIMIT_DICE_FACES);
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

  const question = a + operator + b;

  // get correctAnswer
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = a * b;
      break;
  }

  const correctAnswer = result.toString();

  return { question, correctAnswer };
};

export default () => start(RULES_MESSAGE, getQA);
