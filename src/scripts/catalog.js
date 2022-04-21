export const catalog = (harvestedFoodArray) => {
    let catalogHTML = document.querySelector(".container")
    catalogHTML.innerHTML = ''
    for (const foodObject of harvestedFoodArray) {
        catalogHTML.innerHTML += `
        <section class="plant">${foodObject.type}</section>
        `
    }
}