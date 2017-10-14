import start from '../start';
import { getRandomInt, getRandomPairInt } from '../lib';

const rulesMessage = 'What is the result of the expression?';

const limitMaxNumber = 30;
const limitDiceFaces = 3;

const getQuestionAnswerPair = () => {
  // get question
  const { a, b } = getRandomPairInt(limitMaxNumber);

  const dice = getRandomInt(limitDiceFaces);
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

export default () => start(rulesMessage, getQuestionAnswerPair);
