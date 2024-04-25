/*
1.Use a constructor function to implement a 'Car'.A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/ 
*/

const Car = function (make, speed) {
	this.make = make;
	this.speed = `${speed}km/h`;
	console.log(`this car is a ${this.make} with a speed of ${this.speed}`);
};

Car.prototype.accelerate = function () {
	this.speed = `${parseInt(this.speed) + 10}km/h`;
	console.log("the new speed is: ", this.speed);
};

Car.prototype.brake = function () {
	this.speed = `${parseInt(this.speed) - 5}km/h`;
	console.log("the new speed is: ", this.speed);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car2.accelerate();

car1.brake();
car2.brake();
