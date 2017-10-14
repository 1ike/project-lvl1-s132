
import start from '../start';
import { getRandomPairInt } from '../lib';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const limitMaxNumber = 30;

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return getGCD(b, a % b);
};

const getQuestionAnswerPair = () => {
  const { a, b } = getRandomPairInt(limitMaxNumber);
  const question = `${a} ${b}`;

  const correctAnswer = getGCD(a, b).toString();

  return { question, correctAnswer };
};

export default () => start(rulesMessage, getQuestionAnswerPair);
