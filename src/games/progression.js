import start from '../start';
import { getRandomInt } from '../lib';

const RULES_MESSAGE = 'What number is missing in this progression?';

const PROGRESSIONS_LENGTH = 10;
const LIMIT_START_POSITION = 100;
const LIMIT_DIFF = 10;
const MASK_SYMBOL = '..';

const progression = (diff) => {
  const startValue = getRandomInt(LIMIT_START_POSITION);
  const output = [startValue];
  for (let i = 1; i < PROGRESSIONS_LENGTH; i += 1) {
    output.push(output[i - 1] + diff);
  }

  return output;
};

const getQA = () => {
  // get question
  let diff = getRandomInt(LIMIT_DIFF);
  diff = diff === 0 ? 1 : diff;
  const qResult = progression(diff);
  const mask = getRandomInt(PROGRESSIONS_LENGTH);
  qResult[mask] = MASK_SYMBOL;

  const question = qResult.join(' ');

  // get correctAnswer
  const answerDigit = qResult.map((val) => {
    const res = val === MASK_SYMBOL ? val : +val;
    return res;
  });

  const index = answerDigit.indexOf(MASK_SYMBOL);
  let result;
  if (index === 0) {
    result = answerDigit[1] - diff;
  } else {
    result = answerDigit[index - 1] + diff;
  }

  const correctAnswer = result.toString();

  return { question, correctAnswer };
};

export default () => start(RULES_MESSAGE, getQA);
