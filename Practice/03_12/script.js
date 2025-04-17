/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Computer from "./Computer.js";

const PC = new Computer("PC", "Desktop", "Intel Core i9", false, 0, 2024)
console.log("PC Object", PC)

PC.isOn = true;
PC.temp = 131

PC.powerOffIfTempIsTooHigh(131)

console.log("PC Object when its overheating: ", PC)
