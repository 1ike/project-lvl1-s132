import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const play = (getQuestion, getCorrectAnswer, name, counter) => {
  const question = getQuestion();
  const questionMessage = `Question: ${question}\nYour answer: `;
  const answer = readlineSync.question(questionMessage);
  const correctAnswer = getCorrectAnswer(question);
  if (answer === correctAnswer) {
    console.log('Correct!');
    const counterNew = counter + 1;
    if (counterNew < 3) {
      play(getQuestion, getCorrectAnswer, name, counterNew);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  }
};

const start = (rulesMessage, getQuestion, getCorrectAnswer) => {
  console.log(rulesMessage);
  let name = readlineSync.question('\nMay I have your name? ');
  name = name !== '' ? name : 'Anonymous';
  console.log(`Hello, ${name}!\n`);
  play(getQuestion, getCorrectAnswer, name, 0);
};

export default start;
