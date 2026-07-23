require("dotenv").config();

const config = {
    ageIncrement: Number(process.env.AGE_INCREMENT),
    maxStudentsPerClass: Number(process.env.MAX_STUDENTS_PER_CLASS),
    logFile: process.env.LOG_FILE
};

module.exports = config; 