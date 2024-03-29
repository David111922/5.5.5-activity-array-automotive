//this includes the vehicle class as a module
const VehicleModule = Require("./vehicleBaseClass")
class Car extends VehicleModule{
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

start() {
if (this.fuel > 0) {
 console.log("engine has started")
 return this.started = true
}
 else{ 
console.log("no fuel");
return this.started = false;

 }
}
loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger += num; // Increment passenger count
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " does not have enough space to take all passengers.");
        }
    } else {
        console.log(this.model + " " + this.make + " is full");
    }
}
}

let V = new Car('Mercury', 'Cougar', '2002', 'White', 50000);

V.start();
V.loadPassenger(5);
V.stop();
V.checkService();

console.log(V);

    

















//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
