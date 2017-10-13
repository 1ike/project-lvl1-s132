import start from '../start';
import { getRandomInt } from '../lib';

const RULES_MESSAGE = 'Answer "yes" if number even otherwise answer "no".';

const LIMIT_MAX_NUMBER = 100;

const getQA = () => {
  const question = getRandomInt(LIMIT_MAX_NUMBER);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => start(RULES_MESSAGE, getQA);
