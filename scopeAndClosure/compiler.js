//variables of a program create the state

//JS functions are values themselves so they can be assigned and moves around but maintain scope
//this is an example of closure

//a program is processed by a compiler in three basic stages
//1. tokenizing/lexing - breaking up a string or characters in chunks called tokens
//                       eg. var a = 2; var, a, =, 2, ;
//2. parsing - taking a stream of tokens and turning it into a tree of nested elements
// representing the grammatical structure og the program called a "AST" (abstact syntax tree)
//             eg. VariableDeclaration 
//                    /         \
//         Identifier = a    AssignmentExpression
//                              /
//                  NumericalLiteral = 2
//3. code generation - takes an AST and turns it into executable code by converting it into
// machine instructions to ctually create a variable called a

var students = [                      //assignment operation / target = students / source = array
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {  //assignment operation / target = getStudentName
    for (let student of students) {   //assignment operation / target = student / source = students
        if (student.id == studentID) {//assignment operation / source = student and studentID
            return student.name;      //assignment operation / source = student
        }
    }
}

var nextStudent = getStudentName(73); //assigns 73 to the studentID / target = 73 / souce = getStudnetName

console.log(nextStudent);            //assignment operation / source = console and nextStudent 
