import readlineSync from 'readline-sync';

const greeting = (message = 'Welcome to the Brain Games!') => {
  console.log(message);
};

const declareRules = (message) => {
  console.log(message);
};

const getName = (message = '\nMay I have your name? ') => {
  let name = readlineSync.question(message);
  name = name !== '' ? name : 'Хрен с горы';
  console.log(`Hello, ${name}!\n`);
  return name;
};

const init = (rulesMessage) => {
  greeting();
  declareRules(rulesMessage);
  return getName();
};

export default init;
