export class Foo {
  constructor(a: number);

  a: number;
  b: number | ((_0: number) => void);
  c: { [key: string]: number };

  static bar: number;
  static baz(_0: number): void;
}

export class ReplaceError extends Error {}

export class AnotherError extends Error {}