import { Config, Result } from './wordle.types';

export class Game {
  private attempts: number;
  private config: Config;
  private correctWord: string;

  private constructor(config: Config) {
    if (config.correctWordIndex >= config.dictionary.length) throw {};

    this.config = config;

    if (config.correctWordIndex === undefined) {
      const randomWordIndex = Math.floor(
        Math.random() * this.config.dictionary.length,
      );

      this.config.correctWordIndex = randomWordIndex;
    }

    this.attempts = 0;
    this.correctWord = this.config.dictionary[this.config.correctWordIndex];
  }

  static start(config: Config): Game {
    const game = new this(config);

    return game;
  }

  attempt(word: string): Result {
    if (this.attempts > 6) throw {};
    if (word.length !== 5) throw {};
    if (!this.config.dictionary.includes(word)) throw {};

    this.attempts++;

    const correctLetters = [...this.correctWord];
    const letters = [...word];

    correctLetters.forEach((value, index) => {
      if (letters[index] === value) return (letters[index] = 'green');

      const letterIndex = letters.findIndex((letter) => letter === value);

      if (letterIndex < 0) return;

      letters[letterIndex] = 'yellow';
    });

    return letters.map((value) =>
      value === 'green' || value === 'yellow' ? value : 'gray',
    );
  }
}
