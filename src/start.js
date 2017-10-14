import readlineSync from 'readline-sync';

const attemptsNumber = 3;

const play = (getQuestionAnswerPair, name, counter) => {
  if (counter === attemptsNumber) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const { question, correctAnswer } = getQuestionAnswerPair();

  console.log(`Question: ${question}`);
  const questionMessage = 'Your answer: ';
  const answer = readlineSync.question(questionMessage);
  if (answer === correctAnswer) {
    console.log('Correct!');
    play(getQuestionAnswerPair, name, counter + 1);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`'Let's try again, ${name}!`);
  }
};

const start = (rulesMessage, getQuestionAnswerPair) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesMessage);
  let name = readlineSync.question('\nMay I have your name? ');
  name = name !== '' ? name : 'Anonymous';
  console.log(`Hello, ${name}!`);
  console.log('');
  play(getQuestionAnswerPair, name, 0);
};

export default start;
