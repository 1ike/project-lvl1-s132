
const readlineSync = require('readline-sync');


const Game = function(name, email) {
  this.greeting = () => console.log('Welcome to the Brain Games!');
  this.greetingByName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
  }
};

module.exports = Game;




