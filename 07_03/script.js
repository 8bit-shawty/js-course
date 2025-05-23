/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["pig", "headlamp", "pen"];

// //PUSH
// backpackContents.push("pencil", 5)

// //UNSHIFT (Add to front)
// backpackContents.unshift("pencil", 5)

// backpackContents.forEach(function (item) {
//     item = `<li>${item}</li>`;
//     console.log(item);
// });

let longItems = backpackContents.find(function (item) {
    if (item.length >= 5) {
        return item;
    }
});
console.log("longItems:", longItems);

console.log(backpackContents);


