class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Rabbit extends Animal {
    constructor(name) {
        // Need to add super(name) instead of this.name = name;
        // The super keyword is used to call the constructor of
        // its parent class to access the parent's properties and methods.
        super(name);
        // this.name = name;
        this.created = Date.now();
    }
}
let rabbit = new Rabbit("White Rabbit"); 

console.log(rabbit);
