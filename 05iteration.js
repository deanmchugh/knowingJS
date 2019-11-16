// for ... of loop
// given an iterator of some data source:
var it = [1, 2, 3]

// loop over its results one at a time
for (let val of it) {
    console.log(`Iterator value: ${val}`);
}

// spread an iterator into an array,
// with each iterated value occupying
// an array element position.
// this is a shellow-copy of array
var vals = [ ...it ];

// can also be done to strings
var greeting = "Hello world!";
var chars = [ ...greeting ];

// spread an iterator into a function,
// call with each iterated value
// occupying an argument position.
doSomethingUseful( ...it );

//map function uses a key/value pair
var buttonNames = new Map();
buttonNames.set(btn1,"Button 1");
buttonNames.set(btn2,"Button 2");

for (let [btn,btnName] of buttonNames) {
    btn.addEventListener("click",function onClick(){
        console.log(`Clicked ${btnName}`);
    });
}

// return only the values
for (let btnName of buttonNames.values()) {
    console.log(btnName);
}

// return index and value
var arr = [ 10, 20, 30 ];

for (let [idx,val] of arr.entries()) {
    console.log(`[${idx}]: ${val}`);
}



