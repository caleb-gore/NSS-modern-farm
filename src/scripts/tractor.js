import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (yearlyPlan) => {
    // plan is an array that contains arrays
    // must get access to interior arrays
    for (const row of yearlyPlan) {
        for (let i = 0; i < row.length; i++) {
            switch (row[i]) {
                case 'Asparagus':
                    addPlant(createAsparagus());
                    break;
                case 'Corn':
                    addPlant(createCorn());
                    break;
                case 'Potato':
                    addPlant(createPotato());
                    break;
                case 'Soybean':
                    addPlant(createSoybean());
                    break;
                case 'Sunflower':
                    addPlant(createSunflower());
                    break;
                case 'Wheat':
                    addPlant(createWheat());
                    break;
                default:
                    console.log('something went wrong');
            }
        }
    }
}