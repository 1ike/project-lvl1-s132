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

export { getRandomInt, getRandomPairInt, getGCD };
