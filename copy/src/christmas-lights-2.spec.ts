import ChristmasLights from './christmas-lights-2';
import { Coordinate, Lights } from './christmas-lights.types';

describe('Christmas Lights 2', () => {
  let lights: Lights;

  beforeEach(() => {
    lights = ChristmasLights.start();
  });

  it('turns on', () => {
    const from: Coordinate = { x: 0, y: 0 };
    const to: Coordinate = { x: 0, y: 0 };

    lights = ChristmasLights.turnOn(lights, from, to);

    expect(ChristmasLights.brightness(lights)).toBe(1);
  });

  it('toggle', () => {
    const from: Coordinate = { x: 0, y: 0 };
    const to: Coordinate = { x: 999, y: 999 };

    lights = ChristmasLights.toggle(lights, from, to);

    expect(ChristmasLights.brightness(lights)).toBe(2000000);
  });
});
