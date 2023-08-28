import { Game } from './wordle';

describe('Wordle', () => {
  const DICTIONARY = ['rosas', 'sacos', 'sosas', 'abeja'];
  let game: Game;

  beforeEach(() => {
    game = Game.start({
      correctWordIndex: 0,
      dictionary: DICTIONARY,
    });
  });

  it('has to be attempted with 5 letter words', () => {
    expect(() => game.attempt('saco')).toThrow();
    expect(() => game.attempt('sacos')).not.toThrow();
    expect(() => game.attempt('saqueo')).toThrow();
  });

  it('has to be guessed in less than seven attempts', () => {
    for (let index: number = 0; index < 7; index++)
      expect(() => game.attempt('sacos')).not.toThrow();

    expect(() => game.attempt('sacos')).toThrow();
  });

  it('has to be attempted with words from the dictionary', () => {
    expect(() => game.attempt('sacos')).not.toThrow();
    expect(() => game.attempt('abcde')).toThrow();
  });

  it('turns green correct letters', () => {
    const result = game.attempt('sacos');

    expect(result[4]).toBe('green');
  });

  it('turns yellow correct letters in the wrong place', () => {
    const result = game.attempt('sacos');

    expect(result[0]).toBe('yellow');
    expect(result[3]).toBe('yellow');
  });

  it('turns gray incorrect letters', () => {
    const result = game.attempt('sacos');

    expect(result[2]).toBe('gray');
  });

  it('turns gray rest of correct letter occurrences', () => {
    const result = game.attempt('sosas');

    expect(result[0]).toBe('gray');
  });

  it('turns gray rest of correct letter in the wrong place occurrences', () => {
    const result = game.attempt('abeja');

    expect(result[4]).toBe('gray');
  });
});
