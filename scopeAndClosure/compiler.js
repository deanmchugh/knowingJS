var students = [                      //assignment operation
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
    for (let student of students) {   //assignment operation
        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73); //assigns 73 to the studentID

console.log(nextStudent);

function getStudentName() {
    // assignment to an undeclared variable :(
    nextStudent = "Suzy";
}

getStudentName();

console.log(nextStudent);