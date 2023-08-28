import ChristmasLights from './christmas-lights';
import { Coordinate, Lights } from './christmas-lights.types';

describe('Christmas Lights', () => {
  let lights: Lights;

  beforeEach(() => {
    lights = ChristmasLights.start();
  });

  it('turns on', () => {
    const from: Coordinate = { x: 0, y: 0 };
    const to: Coordinate = { x: 999, y: 999 };

    lights = ChristmasLights.turnOn(lights, from, to);

    expect(lights.every((row) => row.every((light) => light === 1))).toBe(true);
  });

  it('turns off', () => {
    const from: Coordinate = { x: 499, y: 499 };
    const to: Coordinate = { x: 500, y: 500 };

    lights = ChristmasLights.turnOff(lights, from, to);

    for (let column = from.x; column <= to.x; column++) {
      for (let row = from.y; row <= to.y; row++) {
        expect(lights[row][column]).toBe(0);
      }
    }
  });

  it('toggle', () => {
    const from: Coordinate = { x: 0, y: 0 };
    const to: Coordinate = { x: 999, y: 0 };

    lights = ChristmasLights.toggle(lights, from, to);

    expect(lights[0].every((light) => light === 1)).toBe(true);
    expect(
      lights.slice(1).every((row) => row.every((light) => light === 0)),
    ).toBe(true);
  });
});
