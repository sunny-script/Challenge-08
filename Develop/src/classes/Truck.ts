// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface DONE
class Truck extends Vehicle implements AbleToTow{
  // TODO: Declare properties of the Truck class DONE
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity DONE
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number) DONE
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class DONE
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // TODO: The constructor should call the constructor of the parent class, Vehicle DONE
    super();
    
    // TODO: The constructor should initialize the properties of the Truck class DONE
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not DONE
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  // TODO: Implement the tow method from the AbleToTow interface DONE
  // TODO: Get the make an model of the vehicle if it exists DONE
  // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity DONE
  // TODO: If it is, log that the vehicle is being towed DONE
  // TODO: If it is not, log that the vehicle is too heavy to be towed DONE
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;
    const vehicleWeight = vehicle.weight;
    const towingCapacity = this.towingCapacity;

    if (vehicleWeight <= towingCapacity) {
      console.log(`Towing ${vehicleMake} ${vehicleModel}`);
    } else {
      console.log(`The ${vehicleMake} ${vehicleModel} is too heavy to be towed.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class DONE
  // TODO: The method should call the printDetails method of the parent class DONE
  // TODO: The method should log the details of the Truck DONE
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels DONE

  override printDetails(): void {
    super.printDetails();

    const wheels = this.wheels.map((wheel:Wheel) => {
      return `Size: ${wheel.getDiameter} inches, Brand: ${wheel.getTireBrand}`;
    }).join(`, `);
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheels: ${this.wheels}`);
  }
}

// Export the Truck class as the default export
export default Truck;
