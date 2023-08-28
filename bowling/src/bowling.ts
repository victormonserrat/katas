export class Game {
  readonly frames: number[][];

  private constructor() {
    this.frames = [];
  }

  static start(): Game {
    const game = new this();

    return game;
  }

  private frameBonus(index: number): number {
    if (this.isStrike(this.frames[index]))
      return (
        (this.frames[index + 1]?.[0] ?? 0) +
        (this.frames[index + 1]?.[1] ?? this.frames[index + 2]?.[0] ?? 0)
      );

    if (this.isSpare(this.frames[index]))
      return this.frames[index + 1]?.[0] ?? 0;

    return 0;
  }

  private frameScore(frame: number[]): number {
    return frame.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
  }

  private isStrike(frame: number[]): boolean {
    return frame[0] === 10;
  }

  private isSpare(frame: number[]): boolean {
    return this.frameScore(frame) === 10;
  }

  roll(pins: number): void {
    if (
      this.frames.length > 0 &&
      this.frames.at(-1).length < 2 &&
      !this.isStrike(this.frames.at(-1))
    ) {
      this.frames.at(-1).push(pins);

      return;
    }

    this.frames.push([pins]);
  }

  get score(): number {
    return this.frames
      .slice(0, 10)
      .reduce(
        (previousValue, currentValue, currentIndex) =>
          previousValue +
          this.frameScore(currentValue) +
          this.frameBonus(currentIndex),
        0,
      );
  }
}
