const { generateAnswer, validateGuess, scoreGuess } = require('../../utils/game');

const MAX_ATTEMPTS = 8;

Page({
  data: {
    answer: '',
    guessInput: '',
    history: [],
    remainingAttempts: MAX_ATTEMPTS,
    gameOver: false,
    won: false,
    statusText: '????? 4 ???????????'
  },

  onLoad() {
    this.resetGame();
  },

  onInputChange(event) {
    const value = String(event.detail.value || '').replace(/\D/g, '').slice(0, 4);
    this.setData({ guessInput: value });
  },

  handleGuess() {
    if (this.data.gameOver) {
      return;
    }

    const guess = this.data.guessInput;
    const validation = validateGuess(guess);

    if (!validation.valid) {
      wx.showToast({
        title: validation.message,
        icon: 'none'
      });
      this.setData({ statusText: validation.message });
      return;
    }

    const currentAttempt = this.data.history.length + 1;
    const result = scoreGuess(this.data.answer, guess);
    const won = result.a === 4;
    const remainingAttempts = MAX_ATTEMPTS - currentAttempt;
    const gameOver = won || currentAttempt >= MAX_ATTEMPTS;

    let statusText = `?? ${remainingAttempts} ????`;
    if (won) {
      statusText = `????????? ${this.data.answer}?`;
    } else if (gameOver) {
      statusText = `??????????? ${this.data.answer}?`;
    }

    this.setData({
      guessInput: '',
      history: [
        ...this.data.history,
        {
          attempt: currentAttempt,
          guess,
          result
        }
      ],
      remainingAttempts,
      gameOver,
      won,
      statusText
    });
  },

  resetGame() {
    this.setData({
      answer: generateAnswer(),
      guessInput: '',
      history: [],
      remainingAttempts: MAX_ATTEMPTS,
      gameOver: false,
      won: false,
      statusText: '????? 4 ???????????'
    });
  }
});
