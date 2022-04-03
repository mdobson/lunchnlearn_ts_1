//Minimize use of any, and consider substituting unknown

enum FuelType {
  ethanol = "ethanol",
  gasoline = "gasoline",
  kerosene = "kerosene",
  electricity = "electricity",
}

interface Vehicle {
  wheels: number;
  doors: number;
  model: string;
  make: string;
  fuel: keyof typeof FuelType;
}

const inspectVehicle = (veh: Vehicle): string => {
  return ` ${veh.make} ${veh.model} has ${veh.wheels} wheels and ${veh.doors} doors and runs on ${veh.fuel}`;
};

const vehicle: Vehicle = {
  wheels: 4,
  doors: 4,
  model: "Jeep",
  make: "Cherokee",
  fuel: "ethanol",
};

console.log(inspectVehicle(vehicle));

// Uncomment to check out the error
// const vehicleTwo = {
//   wheels: 4,
//   doors: 4,
//   model: "Jeep",
// };

// console.log(inspectVehicle(vehicleTwo));

//This is telling the typescript tooling "Hey I know what this is. Don't type check!"
const vehicleTwo = {
  wheels: 4,
  doors: 4,
  model: "Jeep",
} as any;

console.log(inspectVehicle(vehicleTwo));

//Use a typeguard or structural typing to avoid this

//Structural typing. Object has compatible shape with desired method.
const structurallySimilarVehicle = {
  wheels: 4,
  doors: 4,
  model: "Jeep",
  make: "Cherokee",
  //This is a type assertion to condense the object type of string to a set of values
  fuel: "ethanol" as keyof typeof FuelType,
  horses: 500,
};

console.log(inspectVehicle(structurallySimilarVehicle));

const structurallySimilarVehicleWithoutAssertion = {
  wheels: 4,
  doors: 4,
  model: "Jeep",
  make: "Cherokee",
  fuel: "ethanol",
  horses: 500,
};

//Narrow our type with a few custom typeguards

const hasFuel = (v: unknown): v is { fuel: unknown } => {
  return typeof v === "object" && v !== null && "fuel" in v;
};

const isVehicle = (v: unknown): v is Vehicle => {
  if (hasFuel(v)) {
    const fuel = v.fuel;
    if (
      typeof fuel === "string" &&
      v !== null &&
      Object.keys(FuelType).includes(fuel)
    ) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

if (isVehicle(structurallySimilarVehicleWithoutAssertion)) {
  console.log(inspectVehicle(structurallySimilarVehicleWithoutAssertion));
} else {
  console.log(`Not a vehicle!`);
}
