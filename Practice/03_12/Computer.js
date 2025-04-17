class Computer {
    constructor(model, type, processor, isOn, temp, yearBought) {
        this.model = model;
        this.type = type;
        this.processor = processor;
        this.isOn = isOn;
        this.temp = temp;
        this.yearBought = yearBought;
    }
    togglePower(powerStatus) {
        this.isOn = powerStatus
    }
    powerOffIfTempIsTooHigh(tempStatus) {
        if (tempStatus > 130) {
            this.isOn = false;
            console.log("Temp is over 130 F... Powering down.")
        }
    }
}

export default Computer;