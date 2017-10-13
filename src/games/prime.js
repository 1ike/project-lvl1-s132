
import start from '../start';
import { getRandomInt } from '../lib';

const RULES_MESSAGE = 'Answer "yes" if number is prime otherwise answer "no".';

const LIMIT_MAX_NUMBER = 50;

const isPrime = (num) => {
  if (num === 1) return false;

  for (let d = 2; d * d <= num; d += 1) {
    if (num % d === 0) return false;
  }

  return true;
};

const getQA = () => {
  const question = getRandomInt(LIMIT_MAX_NUMBER);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => start(RULES_MESSAGE, getQA);
