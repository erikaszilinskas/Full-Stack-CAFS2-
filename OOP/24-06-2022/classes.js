class Cars {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = Number(year);
    }

    getIntroduction() {
        return this.make + ' ' + this.model;
    }

    getAge() {
        let msg1 = 'car is 10 years old or newer';
        let msg2 = 'car is 11 years old or older';
        let date = new Date();
        let years = date.getFullYear();
        return ((years - this.year) < 10) ? msg1 : msg2;
    }

    getCarData() {
        let result = '';
        result = 'Make and model: ' + this.getIntroduction() + '\n' +
                 'Car condition is: ' + this.getAge();

        return result;
    }
}

class Motorcycle extends Cars {
    constructor(make, model, year, wheels) {
        super(make, model, year);
        this.wheels = Number(wheels);
    }

    getWheelsNumber() {
        if (this.wheels == 2) {
            return 'bike has 2 wheels';
        }
        if (this.wheels == 3) {
            return 'bike has 3 wheels';
        }
        else {
            return 'bike has 4 wheels or more';
        }
    }

    getBikeData() {
        let result = '';
        result = 'Make and model: ' + this.getIntroduction() + '\n' +
                 'Wheels number: ' + this.getWheelsNumber();

        return result;

    }
}

