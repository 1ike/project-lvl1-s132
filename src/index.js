 import readlineSync from 'readline-sync';
// const readlineSync = require('readline-sync');


function Game() {
  this.greeting = () => console.log('Welcome to the Brain Games!');
  this.greetingByName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
  };
}

module.exports = Game;
