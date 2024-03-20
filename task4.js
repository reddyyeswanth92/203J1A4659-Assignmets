var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.displayInfo = function () {
        console.log(this.make, this.model, this.year);
    };
    return Car;
}());
var c1 = new Car();
c1.make = 'volkswagon';
c1.model = 'virtus';
c1.year = 2024;
c1.displayInfo();
