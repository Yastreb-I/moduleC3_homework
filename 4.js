
function ElectricaldDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricaldDevice.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricaldDevice.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Прибор 1
function Mixer(name, brand, power, numberSpeeds,numberNozzles) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.numberSpeeds = numberSpeeds;
    this.numberNozzles = numberNozzles;
    this.isPlugged = true;
}

Mixer.prototype = new ElectricaldDevice();

// Прибор 2
function Smartphone(name, brand, model, power, diagonal, processor, battery ) {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.power = power;
    this.diagonal = diagonal;
    this.processor = processor;
    this.battery = battery;
    this.isPlugged = false;
}

Smartphone.prototype = new ElectricaldDevice();

// экземпляр блендер
const blender = new Mixer("Blender", "Bosch", 1000, 12, 5);

// экземпляр смартфона
const mySmartphone = new Smartphone("My smartphone", "OnePlus", "5", 20, "5.5", "Snapdragon 835", 3500);

// отключить блендер из розетки
blender.unplug();

// включить смартфон в розетку
mySmartphone.plugIn();

// результат
console.log(blender)
console.log(mySmartphone)
