// objects is a class, but not every class is an object
// superman is a superhero, but not every superhero is superman


function Car(company, model, color, year) {
    this.company = company;
    this.model = model;
    this.color = color;
    this.year = year;
    this.sayMotto = function(motto) {
        console.log(motto);
    }
}

var bmwM3 = new Car("BMW", "M3", "White", 2013);