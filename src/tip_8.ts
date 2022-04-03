//Minimize over annotation

enum CatColors {
  orange,
  gray,
  black,
}

type CatNames = "Arthur" | "Alvin" | "Cinder" | "Ash";

interface Cat {
  name: CatNames;
  color: keyof typeof CatColors;
  sound: "purr" | "chitter" | "meow";
}

interface CatMessage {
  message: string;
  urgency: "high" | "low";
}

type GreetingGenerator = (cat: Cat) => string;
type MessageGenerator = (cat: Cat) => CatMessage;
type ActionPerformance = () => Record<CatNames, CatMessage>;
type CatGenerator = (name: CatNames) => Cat;

const generateCat: CatGenerator = (name) => {
  const cat: Cat = {
    name: name,
    color:
      name === "Alvin" || name === "Arthur"
        ? "orange"
        : name === "Cinder"
        ? "black"
        : "gray",
    sound:
      name === "Alvin" || name === "Arthur"
        ? "purr"
        : name === "Cinder"
        ? "chitter"
        : "meow",
  };

  return cat;
};

const generateGreeting: GreetingGenerator = (cat) => {
  return `${cat.name} says ${cat.sound}!`;
};

const generateCatMessage: MessageGenerator = (cat) => {
  const message: CatMessage = {
    message: generateGreeting(cat),
    urgency: Math.floor(Math.random() * 4) % 2 === 0 ? "high" : "low",
  };

  return message;
};

const performAction: ActionPerformance = (): Record<string, CatMessage> => {
  //We constrained the values of the array to be a set of allowable strings
  //Not a unique set of strings!
  const names: CatNames[] = [
    "Alvin",
    "Alvin",
    "Arthur",
    "Ash",
    "Cinder",
    "Cinder",
  ];

  const cats: Cat[] = names.map((cat: CatNames) => {
    const catObj: Cat = generateCat(cat);
    return catObj;
  });

  const messageRecords: Record<string, CatMessage> = {};
  cats.forEach((cat: Cat) => {
    const catMessage: CatMessage = generateCatMessage(cat);
    messageRecords[cat.name] = catMessage;
  });

  return messageRecords;
};

console.log(performAction());
