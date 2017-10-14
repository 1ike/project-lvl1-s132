import start from '../start';
import { getRandomInt } from '../lib';

const rulesMessage = 'Answer "yes" if number even otherwise answer "no".';

const limitMaxNumber = 100;

const getQuestionAnswerPair = () => {
  const question = getRandomInt(limitMaxNumber);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => start(rulesMessage, getQuestionAnswerPair);
