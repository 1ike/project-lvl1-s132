import readlineSync from 'readline-sync';

const greeting = (message = 'Welcome to the Brain Games!') => {
  console.log(message);
};

const declareRules = (message) => {
  console.log(message);
};

let name = 'John';
const greetingByName = (message = '\nMay I have your name? ') => {
  name = readlineSync.question(message);
  console.log(`Hello, ${name}!\n`);
};

const showCorrect = () => console.log('Correct!');
const showCongrats = man => console.log(`Congratulations, ${man}!`);


let counter = 0;
const play = () => {
  const number = Math.floor(Math.random() * 1000);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  const question = `Question: ${number}\nYour answer: `;
  const answer = readlineSync.question(question);

  const showByeBye = () => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  };

  const checkAnswer = (predicate) => {
    if (predicate) {
      showCorrect();
      counter += 1;
      if (counter < 3) {
        play();
      } else {
        showCongrats(name);
      }
    } else {
      showByeBye(answer, correctAnswer, name);
    }
  };

  switch (answer) {
    case 'yes':
      checkAnswer(isEven);
      break;
    case 'no':
      checkAnswer(!isEven);
      break;
    default:
      showByeBye();
      break;
  }
};

export { greeting, declareRules, greetingByName, play };
