import start from '../start';
import { getRandomInt } from '../lib';

const rulesMessage = 'What number is missing in this progression?';

const progressionLength = 10;
const limitStartPosition = 100;
const limitDiff = 10;
const maskSymbol = '..';

const getProgression = (diff) => {
  const startValue = getRandomInt(limitStartPosition);
  const output = [startValue];
  for (let i = 1; i < progressionLength; i += 1) {
    output.push(output[i - 1] + diff);
  }

  return output;
};

const getQuestionAnswerPair = () => {
  // get question
  let diff = getRandomInt(limitDiff);
  diff = diff === 0 ? 1 : diff;
  const questionResult = getProgression(diff);
  const mask = getRandomInt(progressionLength);
  questionResult[mask] = maskSymbol;

  const question = questionResult.join(' ');

  // get correctAnswer
  const answerDigit = questionResult.map((val) => {
    const res = val === maskSymbol ? val : +val;
    return res;
  });

  const index = answerDigit.indexOf(maskSymbol);
  let result;
  if (index === 0) {
    result = answerDigit[1] - diff;
  } else {
    result = answerDigit[index - 1] + diff;
  }

  const correctAnswer = result.toString();

  return { question, correctAnswer };
};

export default () => start(rulesMessage, getQuestionAnswerPair);
