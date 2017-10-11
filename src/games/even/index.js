import init from '../../assets/init';
import play from '../../assets/play';
import { getRandomInt } from '../../assets/lib';

const rulesMessage = 'Answer "yes" if number even otherwise answer "no"';
const name = init(rulesMessage);

const getQuestion = () => getRandomInt(100);

const getCorrectAnswer = (question) => {
  const result = question % 2 === 0 ? 'yes' : 'no';
  return result;
};

play(getQuestion, getCorrectAnswer, name);
