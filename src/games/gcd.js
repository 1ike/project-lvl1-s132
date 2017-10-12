
import start from '../start';
import { getRandomPairInt, getGCD } from '../lib';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const { a, b } = getRandomPairInt(30);

  return `${a} ${b}`;
};

const getCorrectAnswer = (questValue) => {
  const arr = questValue.split(' ');

  return getGCD(arr[0], arr[1]).toString();
};

start(rulesMessage, getQuestion, getCorrectAnswer);
