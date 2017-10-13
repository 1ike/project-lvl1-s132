import readlineSync from 'readline-sync';

const ATTEMPTS_NUMBER = 3;

const play = (getQA, name, counter) => {
  if (counter === ATTEMPTS_NUMBER) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const { question, correctAnswer } = getQA();

  console.log(`Question: ${question}`);
  const questionMessage = 'Your answer: ';
  const answer = readlineSync.question(questionMessage);
  if (answer === correctAnswer) {
    console.log('Correct!');
    play(getQA, name, counter + 1);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`'Let's try again, ${name}!`);
  }
};

const start = (RULES_MESSAGE, getQA) => {
  console.log('Welcome to the Brain Games!');
  console.log(RULES_MESSAGE);
  let name = readlineSync.question('\nMay I have your name? ');
  name = name !== '' ? name : 'Anonymous';
  console.log(`Hello, ${name}!`);
  console.log('');
  play(getQA, name, 0);
};

export default start;
