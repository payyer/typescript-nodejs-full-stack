interface User {
  name: string;
  age: number;
  isActive: boolean;
}
const user1: User = {
  name: "QuocAnh",
  age: 25,
  isActive: true,
};

function printUser(user: User): string {
  return `${user.name} is ${user.age} years old`;
}

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Bird {
  name: string;
}

type Pet = Dog | Bird;

const yourPet: Pet = {
  name: "Luna",
};

const myDog: Dog = {
  breed: "Husky",
  name: "Max",
};

export {};
