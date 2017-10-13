
import start from '../start';
import { getRandomPairInt } from '../lib';

const RULES_MESSAGE = 'Find the greatest common divisor of given numbers.';

const LIMIT_MAX_NUMBER = 30;

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return getGCD(b, a % b);
};

const getQA = () => {
  const { a, b } = getRandomPairInt(LIMIT_MAX_NUMBER);
  const question = `${a} ${b}`;

  const correctAnswer = getGCD(a, b).toString();

  return { question, correctAnswer };
};

export default () => start(RULES_MESSAGE, getQA);
