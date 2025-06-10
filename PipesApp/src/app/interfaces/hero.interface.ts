export interface Hero {
  id: number;
  name: string;
  canFly: boolean;
  color: Color;
  creator: Creator;
}

export enum Color {
  red,
  black,
  blue,
  green,
}

export enum Creator {
  DC,
  Marvel,
}
