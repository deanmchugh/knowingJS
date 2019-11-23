//JS is classified as an interprated scripting language but instead of being processed 
// in a single top-down pass it is parsed/complied in a seperate phase before execution
//delimit strings

const delimitString = 'my name is dean'

//interpolation
const firstName = 'dean'
const interploationString1 = `my name is ${firstName}`

const names = ['dean', 'john']
const arrayString = `my name is ${names[1]}`

//full object
let person = {
    first: 'dean',
    last: 'mchugh',
    sex: 'male'
}

//change object property
person.first = 'john'

//add object property
person.job = 'plumber'

const objectString = `first name is ${person.first} and i am ${person.sex} and my job is ${person.job}`

console.log(objectString)

//function decleration
function awesomeFunction(coolThings) {
    // ..
    return amazingStuff;
}

//anonymous function. nothing between 'function and (...)' so it has no name
var awesomeFunction = function(coolThings) {
    // ..
    return amazingStuff;
}

//other function declarations
// generator function declaration
function *two() {  }

// async function declaration
async function three() {  }

// async generator function declaration
async function *four() {  }

// named function export declaration (ES6 modules)
export function five() {  }

//function expression forms
// IIFE
(function(){  })();
(function namedIIFE(){  })();

// asynchronous IIFE
(async function(){  })();
(async function namedAIIFE(){  })();

// arrow function expressions
var f;
f = () => 42
f = x => x * 2
f = (x) => x * 2
f = (x,y) => x * y
f = x => ({ x: x * 2 })
f = x => { return x * 2; }
f = async x => {
    var y = await doSomethingAsync(x)
    return y * 2;
}
someOperation( x => x * 2 ) 

//function methods
class SomethingKindaGreat {
    // class methods
    coolMethod() {  }   // no commas!
    boringMethod() {  }
}

var EntirelyDifferent = {
    // object methods
    coolMethod() {  },   // commas!
    boringMethod() {  },

    // (anonymous) function expression property
    oldSchool: function() {  }
};
