'use strict';

// Define a class called Polygon
class Polygon {
    // Constructor with 'height' and 'width' parameters
    constructor(height, width) {
        this.name = 'Polygon'; // Initialize the 'name' property to 'Polygon'
        this.height = height;  // Initialize the 'height' property
        this.width = width;    // Initialize the 'width' property

        var x = '4'; // Declare a local variable 'x' (not used)
    }

    // Define a method 'sayName' to log the name property
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    // Define a method 'sayHistory' to log some historical information
    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }
}

// Add a method 'My_name' to the prototype of the 'Polygon' class
Polygon.prototype.My_name = function () {
    console.log(this.name);
};

// Create an instance 'p' of the 'Polygon' class with height 300 and width 400
let p = new Polygon(300, 400);

// Call the 'sayName' method of 'p' and log the name
p.sayName();

// Log the width property of 'p'
console.log('The width of this polygon is ' + p.width);

// Call the 'sayHistory' method of 'p' to log historical information
p.sayHistory();

// Attempt to log 'x' property of 'p', but 'x' is not defined on 'p'
console.log(p.x);

// Call the 'My_name' method of 'p' to log the name using the prototype method
p.My_name();

// Define a class called MyPoly using a class expression
const MyPoly = class {
    // Define a method 'getPolyName' to log information about the class
    getPolyName() {
        console.log('Hi. I was created with a Class expression. My name is ' +
            this.constructor.name);
    }
};

// Create an instance 'inst' of the 'MyPoly' class
let inst = new MyPoly();

// Call the 'getPolyName' method of 'inst' to log class information
inst.getPolyName();

// Define a class called Square that extends the Polygon class
class Square extends Polygon {
    constructor(length) {
        super(length, length); // Call the constructor of the parent class ('Polygon')
        this.name = 'Square'; // Set the 'name' property to 'Square'
    }

    // Define a getter 'area' to calculate the area of the square
    get area() {
        return this.height * this.width;
    }

    // Define a setter 'area' (currently not used)
    set area(value) {
        this.area = value; // This line may result in a stack overflow error
    }
}

// Create an instance 's' of the 'Square' class with a length of 5
let s = new Square(5);

// Call the 'sayName' method of 's' to log the name
s.sayName();

// Call the 'My_name' method of 's' to log the name using the prototype method
s.My_name();

// Log the area of the square
console.log('The area of this square is ' + s.area);

// Define a class 'Rectangle' that extends the 'Polygon' class
class Rectangle extends Polygon {
    // Constructor with 'height' and 'width' parameters
    constructor(height, width) {
        super(height, width); // Call the constructor of the parent class ('Polygon')
        this.name = 'Rectangle'; // Set the 'name' property to 'Rectangle'
    }

    // Override the 'sayName' method of 'Polygon'
    sayName() {
        console.log('Sup! My name is ', this.name + '.');
        super.sayHistory(); // Call the 'sayHistory' method of 'Polygon' using 'super'
    }
}

// Create an instance 'r' of the 'Rectangle' class with a height of 50 and width of 60
let r = new Rectangle(50, 60);

// Call the 'sayName' method of 'r' to log the modified name using the overridden method
r.sayName();

// Define a class 'Triple'
class Triple {
    // A static method 'triple' that triples the given number 'n' (or defaults to 1)
    static triple(n) {
        n = n || 1;
        return n * 3;
    }
}

// Define a class 'BiggerTriple' that extends 'Triple'
class BiggerTriple extends Triple {
    // Override the 'triple' method to return the result squared
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

// Log the results of calling the 'triple' method on 'Triple' and 'BiggerTriple'
console.log(Triple.triple()); // Log the result of 'Triple.triple()' with default value
console.log(Triple.triple(6)); // Log the result of 'Triple.triple(6)'
console.log(BiggerTriple.triple(3)); // Log the result of 'BiggerTriple.triple(3)'

// Define a class 'MyDate' that extends the built-in 'Date' class
class MyDate extends Date {
    constructor() {
        super(); // Call the constructor of the parent class 'Date'
    }

    // Define a method to get a formatted date
    getFormattedDate() {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'];
        return this.getDate() + '-' + months[this.getMonth()] + '-' +
            this.getFullYear();
    }
}

// Create an instance 'aDate' of the 'MyDate' class
var aDate = new MyDate();

// Log the time of 'aDate' using 'getTime' method
console.log(aDate.getTime());

// Log a formatted date using the 'getFormattedDate' method
console.log(aDate.getFormattedDate());

// Extend 'Uint8Array' with a class 'ExtendedUint8Array'
class ExtendedUint8Array extends Uint8Array {
    constructor() {
        super(10); // Call the constructor of 'Uint8Array' with a length of 10
        this[0] = 255; // Set the value of the first element
        this[1] = 0xFFA; // Set the value of the second element
    }
}

// Create an instance 'eua' of the 'ExtendedUint8Array' class
var eua = new ExtendedUint8Array();

// Log the byte length of 'eua'
console.log(eua.byteLength);

// Extend DOM 'Audio' element with a class 'MyAudio'
class MyAudio extends Audio {
    constructor() {
        super(); // Call the constructor of the parent class 'Audio'
        this._lyrics = ''; // Initialize the '_lyrics' property to an empty string
    }

    // Define a getter for the 'lyrics' property
    get lyrics() {
        return this._lyrics; // Return the value of the '_lyrics' property
    }

    // Define a setter for the 'lyrics' property
    set lyrics(str) {
        this._lyrics = str; // Set the '_lyrics' property to the provided string
    }
}

// Create an instance 'player' of the 'MyAudio' class
var player = new MyAudio();

// Set the 'controls' property to true on the 'player'
player.controls = true;

// Set the 'lyrics' property of 'player' to 'Never gonna give you up'
player.lyrics = 'Never gonna give you up';

// Append the 'player' element to the 'body' of the document
document.querySelector('body').appendChild(player);

// Log the value of the 'lyrics' property of 'player'
console.log(player.lyrics);

// Create a class 'Stack' that extends the built-in 'Array' class
class Stack extends Array {
    constructor() {
        super(); // Call the constructor of the parent class 'Array'
    }

    // Define a method 'top' that returns the last element of the array
    top() {
        return this[this.length - 1];
    }
}

// Create an instance 'stack' of the 'Stack' class
var stack = new Stack();

// Push 'world' and 'hello' into the 'stack' array
stack.push('world');
stack.push('hello');

// Log the result of calling the 'top' method on 'stack' (last element)
console.log(stack.top());

// Log the length of the 'stack' array
console.log(stack.length);

// Define an abstract class 'Abstract'
class Abstract {
    // A static abstract method.
    static foo() {
        if (this === Abstract) {
            // Error Type 2. Abstract methods cannot be called directly.
            throw new TypeError("Cannot call static abstract method foo.");
        } else if (this.foo === Abstract.foo) {
            // Error Type 3. The child has not implemented this method.
            throw new TypeError("Please implement static abstract method foo.");
        } else {
            // Error Type 5. The child has implemented this method but also called `super.foo()`.
            throw new TypeError("Do not call static abstract method foo from child.");
        }
    }

    constructor() {
        if (this.constructor === Abstract) {
            // Error Type 1. Abstract class cannot be constructed.
            throw new TypeError("Cannot construct abstract class.");
        }
        // Else (called from child)
        // Check if all instance methods are implemented.
        if (this.foo === Abstract.prototype.foo) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method foo.");
        }
    }

    // An abstract method.
    foo() {
        // Error Type 6. The child has implemented this method but also called `super.foo()`.
        throw new TypeError("Do not call abstract method foo from child.");
    }
}

// Error Type 1.
//let bar = new Abstract(); // Throws because abstract class cannot be constructed.

// Error Type 2.
//Abstract.foo(); // Throws because static abstract methods cannot be called.

class ChildA extends Abstract { }

// Error Type 3.
//ChildA.foo(); // Throws because ChildA does not implement static abstract method foo.

// Error Type 4.
//let bar = new ChildA(); // Throws because ChildA does not implement abstract method foo.

class ChildB extends Abstract {
    static foo() {
        // Calls Abstract.foo();
        super.foo();
    }
    foo() {
        // Calls Abstract.prototype.foo();
        super.foo();
    }
}

// Error Type 5.
//ChildB.foo(); // Throws because in ChildB the implementation calls the static abstract method foo.

// Error Type 6.
//(new ChildB()).foo(); // Throws because in ChildB the implementation calls the abstract method foo.

class ChildC extends Abstract {
    static foo() {
        // Implementation of abstract static method.
        console.log('ChildC.foo');
    }
    constructor() {
        super();
        // Implementation of constructor.
    }
    foo() {
        // Implementation of abstract method.
        console.log('ChildC.prototype.foo');
    }
}

// Success.
ChildC.foo();
let bar = new ChildC();
bar.foo();
