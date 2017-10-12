import readlineSync from 'readline-sync';

const attemptsNumber = 3;

const play = (getQA, name, counter) => {
  if (counter === attemptsNumber) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const { question, correctAnswer } = getQA();

  const questionMessage = `Question: ${question}\nYour answer: `;
  const answer = readlineSync.question(questionMessage);
  if (answer === correctAnswer) {
    console.log('Correct!');
    play(getQA, name, counter + 1);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`'Let's try again, ${name}!`);
  }
};

const start = (rulesMessage, getQA) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesMessage);
  let name = readlineSync.question('\nMay I have your name? ');
  name = name !== '' ? name : 'Anonymous';
  console.log(`Hello, ${name}!\n`);
  play(getQA, name, 0);
};

export default start;
