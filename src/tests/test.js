const assert = require("assert");

const studentService = require("../services/studentService");
const teacherService = require("../services/teacherService");
const classroomService = require("../services/classroomService");


console.log("\n===== TESTING STARTED =====\n");



// ================= STUDENT TESTS =================

console.log("Testing Student Service...");


const studentResponse = studentService.addStudent(
    "S1",
    "Ali",
    20,
    "Computer Science"
);


assert.strictEqual(
    studentResponse.success,
    true
);


assert.strictEqual(
    studentResponse.student.name,
    "Ali"
);


assert.strictEqual(
    studentResponse.student.course,
    "Computer Science"
);


console.log("✅ Student Add Test Passed");




// Find Student Test

const foundStudent = studentService.findStudentById("S1");


assert.strictEqual(
    foundStudent.id,
    "S1"
);


console.log("✅ Student Find Test Passed");





// ================= TEACHER TESTS =================

console.log("\nTesting Teacher Service...");


const teacherResponse = teacherService.addTeacher(
    "T1",
    "Ahmed",
    "Mathematics",
    5
);



assert.strictEqual(
    teacherResponse.success,
    true
);



assert.strictEqual(
    teacherResponse.teacher.subject,
    "Mathematics"
);



console.log("✅ Teacher Add Test Passed");




// Find Teacher Test

const foundTeacher = teacherService.findTeacherById("T1");


assert.strictEqual(
    foundTeacher.name,
    "Ahmed"
);


console.log("✅ Teacher Find Test Passed");






// ================= CLASSROOM TESTS =================

console.log("\nTesting Classroom Service...");


const classroom = classroomService.addClassroom(
    "C1",
    "CS Classroom"
);



assert.strictEqual(
    classroom.name,
    "CS Classroom"
);



console.log("✅ Classroom Add Test Passed");





// Assign Teacher

classroomService.assignTeacher(
    "C1",
    teacherResponse.teacher
);



assert.strictEqual(
    classroom.teacher.name,
    "Ahmed"
);



console.log("✅ Assign Teacher Test Passed");






// Add Student

classroomService.addStudentToClassroom(
    "C1",
    studentResponse.student
);



assert.strictEqual(
    classroom.students.length,
    1
);



assert.strictEqual(
    classroom.students[0].name,
    "Ali"
);



console.log("✅ Add Student To Classroom Test Passed");






console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY 🎉\n");