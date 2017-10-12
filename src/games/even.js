import start from '../start';
import { getRandomInt } from '../lib';

const getCorrectAnswer = (questValue) => {
  const result = questValue % 2 === 0 ? 'yes' : 'no';
  return result;
};

const rulesMessage = 'Answer "yes" if number even otherwise answer "no"';

const getQA = () => {
  const question = getRandomInt(100);
  const correctAnswer = getCorrectAnswer(question);

  return { question, correctAnswer };
};

export default () => start(rulesMessage, getQA);
