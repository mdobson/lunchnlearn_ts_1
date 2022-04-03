import { TClownFish, TParrotFish, TTropicalFish } from "./tip_5";

interface Contact {
  first_name: string;
  middle_name: string;
  last_name: string;
  birthday: string;
  favorite_food: string;
}

//Manipulate parameters on a base type
type ContactDTO = Readonly<Contact>;

type UpdateContactNameDTO = Partial<
  Pick<ContactDTO, "first_name" | "last_name" | "middle_name">
>;

const updateOne: UpdateContactNameDTO = {
  first_name: "Matty",
  last_name: "Dobs",
  middle_name: "Shawn!",
};

const updateTwo: UpdateContactNameDTO = {
  first_name: "Matty",
  last_name: "Dobs",
};

//Uncomment below to see a readonly error
//updateOne.first_name = "Zach";

type UpdateBirthdayDTO = Omit<
  ContactDTO,
  "first_name" | "middle_name" | "last_name"
>;

//You can extract types from unions where it makes sense
type TReefFish = Extract<TTropicalFish, TClownFish | TParrotFish>;

type TPoisonFish = Exclude<TTropicalFish, TClownFish>;

type THabitat = "reef" | "floatsam" | "harbors";

//Create structures using a Record type!
const FishInTheirHabitats: Record<THabitat, TTropicalFish> = {
  reef: {
    fins: 3,
    gills: true,
    name: "clown",
  },
  floatsam: {
    fins: 2,
    gills: true,
    name: "parrot",
  },
  harbors: {
    fins: 5,
    gills: true,
    name: "lion",
  },
};
