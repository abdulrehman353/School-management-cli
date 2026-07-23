const Classroom = require("../models/Classroom");
const logger = require("../utils/logger");


const classrooms = [];



function addClassroom(id, name) {


    id = String(id).trim();
    name = String(name).trim();


    if(!id || !name) {

        logger.error(
            "Classroom ID or Name missing"
        );

        throw new Error(
            "Classroom ID and Name are required"
        );

    }



    const existingClassroom = classrooms.find(
        classroom => classroom.id === id
    );



    if(existingClassroom) {

        logger.error(
            `Classroom with ID ${id} already exists`
        );


        throw new Error(
            "Classroom already exists"
        );

    }



    const classroom = new Classroom(
        id,
        name
    );



    classrooms.push(classroom);



    logger.info(
        `Classroom ${name} added successfully`
    );



    return classroom;

}




function getClassrooms() {

    return classrooms;

}




function findClassroom(id) {


    const classroom = classrooms.find(
        classroom => classroom.id === id
    );



    if(!classroom) {


        logger.error(
            `Classroom ${id} not found`
        );


        throw new Error(
            "Classroom not found"
        );

    }



    return classroom;

}




function assignTeacher(classroomId, teacher) {


    const classroom = findClassroom(
        classroomId
    );



    classroom.teacher = teacher;



    logger.info(
        `Teacher ${teacher.name} assigned to classroom ${classroom.name}`
    );



    return classroom;

}




function addStudentToClassroom(classroomId, student) {


    const classroom = findClassroom(
        classroomId
    );



    const alreadyExists = classroom.students.find(
        s => s.id === student.id
    );



    if(alreadyExists) {


        logger.error(
            `Student ${student.id} already exists in classroom`
        );


        throw new Error(
            "Student already assigned"
        );

    }



    classroom.students.push(student);



    logger.info(
        `Student ${student.name} added to ${classroom.name}`
    );



    return classroom;

}




function removeStudentFromClassroom(classroomId, studentId) {


    const classroom = findClassroom(
        classroomId
    );



    classroom.students =
        classroom.students.filter(
            student => student.id !== studentId
        );



    logger.info(
        `Student ${studentId} removed from classroom`
    );



    return classroom;

}




function deleteClassroom(id) {


    const index = classrooms.findIndex(
        classroom => classroom.id === id
    );



    if(index === -1) {


        logger.error(
            `Classroom ${id} not found`
        );


        throw new Error(
            "Classroom not found"
        );

    }



    const deleted = classrooms.splice(
        index,
        1
    );



    logger.info(
        `Classroom ${id} deleted`
    );



    return deleted;

}




module.exports = {

    addClassroom,
    getClassrooms,
    findClassroom,
    assignTeacher,
    addStudentToClassroom,
    removeStudentFromClassroom,
    deleteClassroom

};