import start from '../start';
import { getRandomInt } from '../lib';

const rulesMessage = 'Answer "yes" if number is prime otherwise answer "no".';

const limitMaxNumber = 50;

const isPrime = (num) => {
  if (num <= 1) return false;

  const upperLimit = Math.sqrt(num);
  for (let d = 2; d <= upperLimit; d += 1) {
    if (num % d === 0) return false;
  }

  return true;
};

const getQuestionAnswerPair = () => {
  const question = getRandomInt(limitMaxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => start(rulesMessage, getQuestionAnswerPair);
