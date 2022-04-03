//Knowing when to use types and interfaces

//Interfaces and types are typically interchangable
interface IAnimal {
  name: string;
}

type TAnimal = { name: string };

//Interfaces can extend types
interface IFish extends TAnimal {
  fins: number;
  gills: true;
}

//Types can extend interfaces
type TFish = IAnimal & { fins: number; gills: true };

//Types are a good option for creating sets of types under a single alias
//These will be used in a later file!!
export type TClownFish = TFish & { name: "clown" };
export type TParrotFish = TFish & { name: "parrot" };
export type TLionFish = TFish & { name: "lion" };

//A type declaration is good for union style typing when needed.
export type TTropicalFish = TClownFish | TParrotFish | TLionFish;

//You can compound interfaces together with multiple declarations

enum FishNames {
  clown,
  parrot,
  lion,
}

//Multiple interface statements can compose together a type
interface IFish {
  name: keyof typeof FishNames;
}

const fish: IFish = {
  fins: 4,
  gills: true,
  name: "clown",
};
