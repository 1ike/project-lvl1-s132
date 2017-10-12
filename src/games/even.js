import start from '../start';
import { getRandomInt } from '../lib';

const rulesMessage = 'Answer "yes" if number even otherwise answer "no"';

const getQuestion = () => getRandomInt(100);

const getCorrectAnswer = (questValue) => {
  const result = questValue % 2 === 0 ? 'yes' : 'no';
  return result;
};

start(rulesMessage, getQuestion, getCorrectAnswer);
