export const harvestPlants = (plantsArray) => {
    const seedObjectsArray = []
    for (const plant of plantsArray) {
        if (plant.type === 'Corn') {
            let output = plant.output / 2
            for (let i = 0; i < output; i++) {
                seedObjectsArray.push(plant)
            }
        } else {
            let output = plant.output
            for (let i = 0; i < output; i++) {
                seedObjectsArray.push(plant)
            }
        }
    }
    return seedObjectsArray
}