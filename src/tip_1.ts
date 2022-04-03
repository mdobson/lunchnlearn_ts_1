//Play with the compiler and look at it's output!

const greet_tip_one = (name: string) => {
  console.log(`Hey there ${name}!`);
};

interface Person {
  first_name: string;
  last_name: string;
}

const build_name = (person: Person): string => {
  return `${person.first_name} ${person.last_name}`;
};

const p: Person = {
  first_name: "Matt",
  last_name: "Dobson",
};

greet_tip_one(build_name(p));

//Typescript still models javascript behavior
//This is still valid code in basic TS!
const tip_1_a = 2 + "3";
