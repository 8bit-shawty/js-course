/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const bike = {
    name: "Big Ripper",
    size: 29,
    metal: "aluminum",
    damaged: false
}

const addBike = function (newBike) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${newBike.name}</h1>
    <ul>
        <li>Size: ${newBike.size}"</li>
        <li>Metal: ${newBike.metal}</li>
        <li>Is Damaged?: ${newBike.damaged}</li>
    </ul>
    `
    return newArticle;
}

const main = document.querySelector("main")
main.append(addBike(bike))
