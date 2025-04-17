/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const pc = {
    name: "MF's PC",
    housing: "Lian Li",
    processor: "Intel i9",
    gpu: "RTX-4070",
    isOn: false,
    toggleOn: function (powerStatus) {
        this.isOn = powerStatus
    },
    fans: {
        count: 4,
        size: "lg"
    },

}

console.log(pc)