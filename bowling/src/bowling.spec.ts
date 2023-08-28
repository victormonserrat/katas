import { Game } from './bowling';

describe('Bowling', () => {
  let game: Game;

  beforeEach(() => {
    game = Game.start();
  });

  it('scores frames correctly', () => {
    for (let index = 0; index < 10; index++) {
      game.roll(9);
      game.roll(0);
    }

    expect(game.score).toBe(90);
  });

  it('scores spares correctly', () => {
    for (let index = 0; index < 21; index++) game.roll(5);

    expect(game.score).toBe(150);
  });

  it('scores strikes correctly', () => {
    for (let index = 0; index < 12; index++) game.roll(10);

    expect(game.score).toBe(300);
  });
});
