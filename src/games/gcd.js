
import start from '../start';
import { getRandomPairInt } from '../lib';

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return getGCD(b, a % b);
};

const getQuestion = () => {
  const { a, b } = getRandomPairInt(30);

  return `${a} ${b}`;
};

const getCorrectAnswer = (questValue) => {
  const arr = questValue.split(' ');

  return getGCD(arr[0], arr[1]).toString();
};

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getQA = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);

  return { question, correctAnswer };
};

export default () => start(rulesMessage, getQA);
