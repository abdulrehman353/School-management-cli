const Teacher = require("../models/Teacher");
const logger = require("../utils/logger");


const teachers = [];



// Add Teacher

function addTeacher(id, name, subject, experience) {

    try {

        id = String(id).trim();
        name = String(name).trim();
        subject = String(subject).trim();
        experience = Number(experience);



        if (!id || !name || !subject || isNaN(experience)) {

            throw new Error(
                "All fields are required."
            );

        }



        if (experience < 0) {

            throw new Error(
                "Experience cannot be negative."
            );

        }




        const teacherExists = teachers.some(
            teacher => teacher.id === id
        );



        if (teacherExists) {

            throw new Error(
                "Teacher ID already exists."
            );

        }




        const teacher = new Teacher(
            id,
            name,
            subject,
            experience
        );



        teachers.push(teacher);



        logger.info(
            `Teacher Added : ${name}`
        );



        return {

            success: true,

            message: "Teacher added successfully.",

            teacher

        };



    } catch(error) {


        logger.error(
            error.message
        );


        return {

            success:false,

            message:error.message

        };


    }

}




// View Teachers

function viewTeachers() {

    return teachers;

}





// Find Teacher

function findTeacherById(id) {


    return teachers.find(

        teacher => teacher.id === id

    );


}






// Update Teacher

function updateTeacher(
    id,
    newName,
    newSubject,
    newExperience
) {


    try {


        const teacher = findTeacherById(id);



        if(!teacher) {


            throw new Error(
                "Teacher not found."
            );


        }




        teacher.name = newName.trim();

        teacher.subject = newSubject.trim();

        teacher.experience = Number(newExperience);





        logger.info(

            `Teacher Updated : ${teacher.name}`

        );




        return {

            success:true,

            message:"Teacher updated successfully."

        };




    } catch(error) {



        logger.error(
            error.message
        );



        return {

            success:false,

            message:error.message

        };



    }

}






// Delete Teacher

function deleteTeacher(id) {



    try {


        const index = teachers.findIndex(

            teacher => teacher.id === id

        );




        if(index === -1) {


            throw new Error(

                "Teacher not found."

            );


        }





        const deletedTeacher = teachers.splice(

            index,

            1

        );




        logger.info(

            `Teacher Deleted : ${deletedTeacher[0].name}`

        );





        return {

            success:true,

            message:"Teacher deleted successfully."

        };




    } catch(error) {


        logger.error(

            error.message

        );



        return {

            success:false,

            message:error.message

        };


    }


}




module.exports = {

    addTeacher,

    viewTeachers,

    findTeacherById,

    updateTeacher,

    deleteTeacher

};