// Class code examples

// This is a function that will be attached to the GLOBAL object
// therefore the "this" keyword will point to the global object
function sayHelloFloating(){
    console.log("this object of a floating function: ", this)
    console.log("this.firstName: ", this.firstName)
};

sayHelloFloating();

const person1 = {
    firstName: "Jordi",
    age: 28,
    city: "Valencia",
    sayHello() {
        console.log(this.firstName)
    }
};

// This function is attached to a "person1" object
// and therefore the "this" keyword will refere to the person1
person1.sayHello();

const person2 = {
    firstName: "Daniel",
    age: 31,
    city: `Barcelona ${this.age}`, // "this" keyword only can be used inside functions
    sayHello() {
        console.log(`Buen día, soy ${this.firstName}. I am ${this.age} years old`)
    }
};
console.log("blablabla", person2.city)

person2.sayHello();

const abstractPerson = {
    sayHello(){
        return `Hello my name is ${this.name}`
    },
    tellAge(){
        return `I am ${this.age} years young`
    }
};

console.log("abstract person", abstractPerson.tellAge())

console.log(abstractPerson.tellAge.bind(person1)());