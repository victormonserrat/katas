import { Coordinate, Lights } from './christmas-lights.types';

const brightness = (lights: Lights): number =>
  lights.reduce(
    (brightness, row) =>
      brightness +
      row.reduce((rowBrightness, light) => rowBrightness + light, 0),
    0,
  );

const start = (): Lights => Array(1000).fill(Array(1000).fill(0));

const toggle = (lights: Lights, from: Coordinate, to: Coordinate): Lights => {
  const value: number[][] = JSON.parse(JSON.stringify(lights));

  for (let column = from.x; column <= to.x; column++) {
    for (let row = from.y; row <= to.y; row++) {
      value[row][column] = lights[row][column] + 2;
    }
  }

  return value;
};

const turnOff = (lights: Lights, from: Coordinate, to: Coordinate): Lights => {
  const value: number[][] = JSON.parse(JSON.stringify(lights));

  for (let column = from.x; column <= to.x; column++) {
    for (let row = from.y; row <= to.y; row++) {
      if (value[row][column] === 0) continue;

      value[row][column] = lights[row][column] - 1;
    }
  }

  return value;
};

const turnOn = (lights: Lights, from: Coordinate, to: Coordinate): Lights => {
  const value: number[][] = JSON.parse(JSON.stringify(lights));

  for (let column = from.x; column <= to.x; column++) {
    for (let row = from.y; row <= to.y; row++) {
      value[row][column] = lights[row][column] + 1;
    }
  }

  return value;
};

const ChristmasLights = {
  brightness,
  start,
  toggle,
  turnOff,
  turnOn,
} as const;

export default ChristmasLights;
