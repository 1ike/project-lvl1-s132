
import init from '../../assets/init';
import play from '../../assets/play';
import { getRandomPairInt, getGCD } from '../../assets/lib';

const rulesMessage = 'Find the greatest common divisor of given numbers.';
const name = init(rulesMessage);

const getQuestion = () => {
  const { a, b } = getRandomPairInt(30);

  return `${a} ${b}`;
};

const getCorrectAnswer = (question) => {
  const arr = question.split(' ');

  return getGCD(arr[0], arr[1]).toString();
};

play(getQuestion, getCorrectAnswer, name);
