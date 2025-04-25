/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

console.log(document.querySelector("header div:first-child"))
document.querySelector("header div:first-child").classList.add("first")
document.querySelector("header div:first-child").classList.add("second")
document.querySelector("header div:first-child").classList.remove("second")

document.querySelector("header div:first-child").setAttribute("title", "This shouldnt be here")
console.log(document.querySelector("header div:first-child").getAttribute("title"))
document.querySelector("header div:first-child").setAttribute("title", "Yes it should")
document.querySelector("header div:first-child").setAttribute("style", "color: red")
