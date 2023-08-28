import { Coordinate } from './christmas-lights.types';

export const turnsOn = (
  lights: Readonly<number[][]>,
  from: Coordinate,
  to: Coordinate,
) => {
  const value: number[][] = JSON.parse(JSON.stringify(lights));

  for (let column = from.x; column <= to.x; column++) {
    for (let row = from.y; row <= to.y; row++) {
      value[row][column] = 1;
    }
  }

  return value;
};

export const toggle = (
  lights: Readonly<number[][]>,
  from: Coordinate,
  to: Coordinate,
) => {
  const value: number[][] = JSON.parse(JSON.stringify(lights));

  for (let column = from.x; column <= to.x; column++) {
    for (let row = from.y; row <= to.y; row++) {
      value[row][column] = lights[row][column] === 0 ? 1 : 0;
    }
  }

  return value;
};
