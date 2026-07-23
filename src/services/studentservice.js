const Student = require("../models/Student");
const config = require("../config/config");
const logger = require("../utils/logger");

const students = [];


function addStudent(id, name, age, course) {

    try {

        id = String(id).trim();
        name = String(name).trim();
        course = String(course).trim();
        age = Number(age);


        if (!id || !name || !course || isNaN(age)) {
            throw new Error("All fields are required.");
        }


        if (age <= 0) {
            throw new Error("Age must be greater than 0.");
        }


        const studentExists = students.some(
            student => student.id === id
        );


        if (studentExists) {
            throw new Error("Student ID already exists.");
        }


        const finalAge = age + config.ageIncrement;


        const student = new Student(
            id,
            name,
            finalAge,
            course
        );


        students.push(student);


        logger.info(
            `Student Added : ${name}`
        );


        return {
            success: true,
            message: "Student added successfully.",
            student
        };


    } catch(error) {


        logger.error(error.message);


        return {
            success: false,
            message: error.message
        };

    }

}



function viewStudents() {

    return students;

}




function findStudentById(id) {

    return students.find(
        student => student.id === id
    );

}




function updateStudent(id, newName, newAge, newCourse) {


    try {


        const student = findStudentById(id);


        if(!student) {

            throw new Error(
                "Student not found."
            );

        }


        student.name = newName.trim();
        student.age = Number(newAge) + config.ageIncrement;
        student.course = newCourse.trim();


        logger.info(
            `Student Updated : ${student.name}`
        );


        return {
            success:true,
            message:"Student updated successfully."
        };


    } catch(error) {


        logger.error(error.message);


        return {
            success:false,
            message:error.message
        };

    }

}




function deleteStudent(id) {


    try {


        const index = students.findIndex(
            student => student.id === id
        );


        if(index === -1) {

            throw new Error(
                "Student not found."
            );

        }


        const deletedStudent = students.splice(index,1);


        logger.info(
            `Student Deleted : ${deletedStudent[0].name}`
        );


        return {
            success:true,
            message:"Student deleted successfully."
        };


    } catch(error) {


        logger.error(error.message);


        return {
            success:false,
            message:error.message
        };

    }

}




module.exports = {

    addStudent,
    viewStudents,
    findStudentById,
    updateStudent,
    deleteStudent

};