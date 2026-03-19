type Point = {
  x: number;
  y: number;
};

type ID = string | number;

const p1: Point = { x: 10, y: 20 };
const userId: ID = 123;
const postId: ID = "abc-456";

type Animal = {
  name: string;
};

type Dog = {
  breed: string;
} & Animal;

const myDog: Dog = {
  breed: "Husky",
  name: "Max",
};

export {};
