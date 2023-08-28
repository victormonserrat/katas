import { toggle, turnsOn } from './christmas-lights';
import { Coordinate } from './christmas-lights.types';

describe('Christmas Lights', () => {
  let lights: number[][];

  beforeEach(() => {
    lights = Array(1000).fill(Array(1000).fill(0));
  });

  it('turns on', () => {
    const from: Coordinate = { x: 0, y: 0 };
    const to: Coordinate = { x: 999, y: 999 };

    turnsOn(lights, from, to);

    expect(lights.every((row) => row.every((light) => light === 1))).toBe(true);
  });

  it('toggle', () => {
    const from: Coordinate = { x: 0, y: 0 };
    const to: Coordinate = { x: 999, y: 0 };

    toggle(lights, from, to);

    expect(lights[0].every((light) => light === 1)).toBe(true);
    expect(
      lights.slice(1).every((row) => row.every((light) => light === 0)),
    ).toBe(true);
  });
});
