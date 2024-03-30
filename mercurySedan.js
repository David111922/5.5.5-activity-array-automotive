// //this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
this.maxPassengers = 5;
this.passenger = 0;
this.numberOfWheels =4; 
this.maximumSpeed = 160;
this.fuel = 10;
 this.scheduledService = false;
}

checkService(){
if (this.mileage > 30000) {
    this.scheduledService = true
    return this.scheduledService;
    }
}
//     else{
// this.scheduledService = false;
//  }
//  return this.scheduledService;
// }

start() {
if (this.fuel > 0) {
 console.log("engine has started");
return  this.started = true;
 
}
 else{ 
console.log("No fuel");
 return this.started = false;
//  return this.started;help

 }
}
loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if (num + this.passenger <= this.maxPassengers) {
            this.passenger = num; // Increment passenger count
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " does not have enough space to take all passengers.");
        }
    }
     else {
        console.log(this.model + " " + this.make + " is full");
    }
}

// stop() {
//     console.log("car has stopped")
//     this.started = false;
//     return this.started;
// }

}

let myCar = new Car('Mercury', 'Cougar', '2002', 'White', 50000);

myCar.start();
myCar.loadPassenger(5);
myCar.stop();
myCar.checkService();

console.log(myCar);
let v = new Car('Cheverolet', 'Silverado', '2005', 'blue', 240000);

v.start();
v.loadPassenger(5);
v.stop();
v.checkService();

console.log();

    

















// //TO DO: Creating Instances and Testing Them

// //You can use the same instance "v" of the Vehicle class above for the base class.





// //Create at least two new instances of the Car class and test them here:
