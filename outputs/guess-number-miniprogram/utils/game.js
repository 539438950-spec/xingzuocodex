function generateAnswer() {
  const digits = '0123456789'.split('');
  const answer = [];

  while (answer.length < 4) {
    const index = Math.floor(Math.random() * digits.length);
    answer.push(digits.splice(index, 1)[0]);
  }

  return answer.join('');
}

function validateGuess(guess) {
  if (!/^\d{4}$/.test(guess)) {
    return {
      valid: false,
      message: '??? 4 ?????'
    };
  }

  if (new Set(guess.split('')).size !== 4) {
    return {
      valid: false,
      message: '4 ????????'
    };
  }

  return { valid: true };
}

function scoreGuess(answer, guess) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < 4; i += 1) {
    if (guess[i] === answer[i]) {
      a += 1;
    }
  }

  for (let i = 0; i < 4; i += 1) {
    const digit = guess[i];

    if (digit === answer[i]) {
      continue;
    }

    if (digit === '0') {
      continue;
    }

    if (answer.includes(digit)) {
      b += 1;
    }
  }

  return { a, b };
}

module.exports = {
  generateAnswer,
  validateGuess,
  scoreGuess
};
