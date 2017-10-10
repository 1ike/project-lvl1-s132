import readlineSync from 'readline-sync';


export default function () {
  this.greeting = () => console.log('Welcome to the Brain Games!');
  this.greetingByName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
  };
}

