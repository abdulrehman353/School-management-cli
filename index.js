const prompt=require("prompt-sync")();

const studentService = require("./src/services/studentservice");
const teacherService = require("./src/services/teacherservice");
const classroomService = require("./src/services/classroomservice");


// STUDENT MENU

function studentMenu(){

while(true){

console.log("\n--- Student Management ---");
console.log("1. Add Student");
console.log("2. View Students");
console.log("3. Find Student");
console.log("4. Update Student");
console.log("5. Delete Student");
console.log("6. Back");

const choice=prompt("Choose option: ");

try{

if(choice==="1"){

const id=prompt("Student ID: ");
const name=prompt("Student Name: ");
const age=prompt("Student Age: ");
const course=prompt("Course: ");

const result=studentService.addStudent(
id,
name,
age,
course
);

console.log(result.message);

}

else if(choice==="2"){

console.log(studentService.viewStudents());

}

else if(choice==="3"){

const id=prompt("Student ID: ");

console.log(
studentService.findStudentById(id)
||"Student not found"
);

}

else if(choice==="4"){

const id=prompt("Student ID: ");
const name=prompt("New Name: ");
const age=prompt("New Age: ");
const course=prompt("New Course: ");

const result=studentService.updateStudent(
id,
name,
age,
course
);

console.log(result.message);

}

else if(choice==="5"){

const id=prompt("Student ID: ");

const result=studentService.deleteStudent(id);

console.log(result.message);

}

else if(choice==="6"){

break;

}

else{

console.log("Invalid option");

}

}

catch(error){

console.log(error.message);

}

}

}



// TEACHER MENU

function teacherMenu(){

while(true){

console.log("\n--- Teacher Management ---");
console.log("1. Add Teacher");
console.log("2. View Teachers");
console.log("3. Find Teacher");
console.log("4. Update Teacher");
console.log("5. Delete Teacher");
console.log("6. Back");

const choice=prompt("Choose option: ");

try{

if(choice==="1"){

const id=prompt("Teacher ID: ");
const name=prompt("Teacher Name: ");
const subject=prompt("Subject: ");
const experience=prompt("Experience: ");

const result=teacherService.addTeacher(
id,
name,
subject,
experience
);

console.log(result.message);

}

else if(choice==="2"){

console.log(
teacherService.viewTeachers()
);

}

else if(choice==="3"){

const id=prompt("Teacher ID: ");

console.log(
teacherService.findTeacherById(id)
||"Teacher not found"
);

}

else if(choice==="4"){

const id=prompt("Teacher ID: ");
const name=prompt("New Name: ");
const subject=prompt("New Subject: ");
const experience=prompt("New Experience: ");

const result=teacherService.updateTeacher(
id,
name,
subject,
experience
);

console.log(result.message);

}

else if(choice==="5"){

const id=prompt("Teacher ID: ");

const result=teacherService.deleteTeacher(id);

console.log(result.message);

}

else if(choice==="6"){

break;

}

else{

console.log("Invalid option");

}

}

catch(error){

console.log(error.message);

}

}

}
// CLASSROOM MENU

function classroomMenu(){

while(true){

console.log("\n--- Classroom Management ---");
console.log("1. Add Classroom");
console.log("2. View Classrooms");
console.log("3. Assign Teacher");
console.log("4. Add Student To Classroom");
console.log("5. Back");

const choice=prompt("Choose option: ");

try{

if(choice==="1"){

const id=prompt("Classroom ID: ");
const name=prompt("Classroom Name: ");

const classroom=classroomService.addClassroom(
id,
name
);

console.log(
"Classroom Added",
classroom
);

}

else if(choice==="2"){

console.log(
classroomService.getClassrooms()
);

}

else if(choice==="3"){

const classroomId=prompt("Classroom ID: ");
const teacherId=prompt("Teacher ID: ");

const teacher=teacherService.findTeacherById(
teacherId
);

if(!teacher){

console.log("Teacher not found");
continue;

}

classroomService.assignTeacher(
classroomId,
teacher
);

console.log(
"Teacher Assigned Successfully"
);

}

else if(choice==="4"){

const classroomId=prompt("Classroom ID: ");
const studentId=prompt("Student ID: ");

const student=studentService.findStudentById(
studentId
);

if(!student){

console.log("Student not found");
continue;

}

classroomService.addStudentToClassroom(
classroomId,
student
);

console.log(
"Student Added Successfully"
);

}

else if(choice==="5"){

break;

}

else{

console.log("Invalid option");

}

}

catch(error){

console.log(error.message);

}

}

}



// MAIN MENU

function mainMenu(){

while(true){

console.log("\n==============================");
console.log(" Student Management System ");
console.log("==============================");

console.log("1. Student Management");
console.log("2. Teacher Management");
console.log("3. Classroom Management");
console.log("4. Exit");

const choice=prompt("Choose option: ");


if(choice==="1"){

studentMenu();

}

else if(choice==="2"){

teacherMenu();

}

else if(choice==="3"){

classroomMenu();

}

else if(choice==="4"){

console.log(
"Application Closed"
);

break;

}

else{

console.log(
"Invalid option"
);

}

}

}


mainMenu();