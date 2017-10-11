import readlineSync from 'readline-sync';

const play = (getQuestion, getCorrectAnswer, name, counter = 0) => {
  const question = getQuestion();
  const questionMessage = `Question: ${question}\nYour answer: `;
  const answer = readlineSync.question(questionMessage);
  const correctAnswer = getCorrectAnswer(question);
  if (answer === correctAnswer) {
    console.log('Correct!');
    const counterFcngLint = counter + 1;
    if (counterFcngLint < 3) {
      play(getQuestion, getCorrectAnswer, name, counterFcngLint);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  }
};

export default play;
