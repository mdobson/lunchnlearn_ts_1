//Type space vs value space

//Typescript attempts to introduce readability by reducing typespace for variables
var tip_2_a = "a";

var tip_2_b = 42;

var tip_2_c = [1, 2, 3, 4];

//Typespace

//Typeof string with characters i and d.
type identifier = "id";

interface Pet {
  name: string;
}

const tip_2_identifier: identifier = "id";

const rocky: Pet = {
  name: "Rocky",
};
