const getRandomInt = limit => Math.floor(Math.random() * limit);

const getRandomPairInt = (limit) => {
  const a = Math.floor(Math.random() * limit);
  const b = Math.floor(Math.random() * limit);
  return { a, b };
};

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return getGCD(b, a % b);
};

const balance = (num) => {
  const str = num.toString();
  const arr = str.split('');
  const { length } = arr;
  const arrDigit = arr.map(val => +val);
  const sum = arrDigit.reduce((acc, val) => acc + val, 0);
  const evenDigit = Math.floor(sum / length);
  let remainder = sum % arr.length;
  const arrResult = [];
  while (remainder > 0) {
    arrResult.push(evenDigit + 1);
    remainder -= 1;
  }
  while (length > arrResult.length) {
    arrResult.push(evenDigit);
  }

  return arrResult.reverse().join('');
};


export {
  getRandomInt,
  getRandomPairInt,
  getGCD,
  balance,
};
