class ElectricaldDevice {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
    }

  plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
    };

  unplug = function() {
      console.log(this.name + " is unplugged!");
      this.isPlugged = false;
      };

}

class Mixer extends ElectricaldDevice {
  constructor(name, brand, power, numberSpeeds,numberNozzles) {
    super(name, power);
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.numberSpeeds = numberSpeeds;
    this.numberNozzles = numberNozzles;
    this.isPlugged = true;
    }

}

class Smartphone extends ElectricaldDevice {
  constructor(name, brand, model, power, diagonal, processor, battery ) {
    super(name, power);
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.power = power;
    this.diagonal = diagonal;
    this.processor = processor;
    this.battery = battery;
    this.isPlugged = false;
    }
}

// экземпляр блендер
const blender = new Mixer("Blender", "Bosch", 1000, 12, 5);

// экземпляр смартфона
const mySmartphone = new Smartphone("My smartphone", "OnePlus", "5", 20, "5.5", "Snapdragon 835", 3500);

// отключить блендер из розетки
blender.unplug();

// включить смартфон в розетку
mySmartphone.plugIn();

// результат
console.log(mySmartphone)
console.log(blender)