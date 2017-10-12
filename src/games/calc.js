import start from '../start';
import { getRandomInt, getRandomPairInt } from '../lib';

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

const getCorrectAnswer = (questValue) => {
  let result;
  const input = questValue.match(/(\d+)(\D)(\d+)/);

  switch (input[2]) {
    case '+':
      result = +input[1] + +input[3];
      break;
    case '-':
      result = +input[1] - +input[3];
      break;
    default:
      result = +input[1] * +input[3];
      break;
  }

  return result.toString();
};

const rulesMessage = 'What is the result of the expression?';

const getQA = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return { question, correctAnswer };
};

export default () => start(rulesMessage, getQA);
