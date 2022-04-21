import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

console.log("Welcome to the main module")


const yearlyPlan = createPlan()
console.log(yearlyPlan);
const plantTheSeeds = plantSeeds(yearlyPlan)
const useThePlants = usePlants()
const harvestThePlants = harvestPlants(useThePlants)
console.log(harvestThePlants);

