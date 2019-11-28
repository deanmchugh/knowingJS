
//shadowing
//the function variable is shadowing the global variable
//this allows the change to the function variable without effecting the global variable
var studentName = "Suzy"; //global scope declaration

function printStudent(studentName) {
    studentName = studentName.toUpperCase(); //function scope declaration
    console.log(studentName);
}

printStudent("Frank");
// FRANK
//this is printed as the function only searches in its own scope to find the variable

printStudent(studentName);
// SUZY
//this is printed as studentName is not declared in the function. it is global variable

console.log(studentName);
// SUZY

//let and shadow var but var cannot shadow let
function something() {
    var special = "JavaScript";
    {
        let special = 42;   // totally fine shadowing
        // ..
    }
}

function another() {
    // ..
    {
        let special = "JavaScript";
        {
            var special = "JavaScript";   // Syntax Error
            // ..
        }
    }
}

//function name scope 

//function declaration
//creates a variable in he enclosing scope
function askQuestion() {
    // ..
}

//anonymous function expression
//this function definition will not hoist
var askQuestion = function() {
    // ..
}

//names function expression. ofTheTeacher is declared as a variable inside the function
var askQuestion = function ofTheTeacher(){
    // ..
}

//GLOBAL SCOPE

(function outerScope(){
    var moduleOne = (function one(){
        // ..
    })();

    var moduleTwo = (function two(){
        // ..

        function callModuleOne() {
            moduleOne.someMethod();
        }

        // ..
    })();
})();