import { Coordinate, Lights } from './christmas-lights.types';

const isOff = (lights: Lights, { x, y }: Coordinate): boolean =>
  lights[y][x] === 0;

const start = (): Lights => Array(1000).fill(Array(1000).fill(0));

const toggle = (lights: Lights, from: Coordinate, to: Coordinate): Lights => {
  const value: number[][] = JSON.parse(JSON.stringify(lights));

  for (let column = from.x; column <= to.x; column++) {
    for (let row = from.y; row <= to.y; row++) {
      value[row][column] = isOff(lights, { x: column, y: row }) ? 1 : 0;
    }
  }

  return value;
};

const turnOff = (lights: Lights, from: Coordinate, to: Coordinate): Lights => {
  const value: number[][] = JSON.parse(JSON.stringify(lights));

  for (let column = from.x; column <= to.x; column++) {
    for (let row = from.y; row <= to.y; row++) {
      value[row][column] = 0;
    }
  }

  return value;
};

const turnOn = (lights: Lights, from: Coordinate, to: Coordinate): Lights => {
  const value: number[][] = JSON.parse(JSON.stringify(lights));

  for (let column = from.x; column <= to.x; column++) {
    for (let row = from.y; row <= to.y; row++) {
      value[row][column] = 1;
    }
  }

  return value;
};

const ChristmasLights = {
  start,
  toggle,
  turnOff,
  turnOn,
} as const;

export default ChristmasLights;
