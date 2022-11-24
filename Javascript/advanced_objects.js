// Reference Type (Similar to Variables as pointers in Ruby)
// In JS it seems to only apply to objects and arrays, i.e mutable objects.

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// Context

const object4 = {
    a: function() {
        console.log(this);
    }
}

// Instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player { // creating a class that includes the same constructor function as Player above
    constructor(name, type) {
        super(name, type); // any time we use extends, we need to call the super function and pass in the variables we want to use from Player.
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');