
import start from '../start';
import { getRandomInt, balance } from '../lib';

const rulesMessage = 'Balance the given number.';

const getQuestion = () => getRandomInt(1000);

const getCorrectAnswer = questValue => balance(questValue);

start(rulesMessage, getQuestion, getCorrectAnswer);
