const fs = require("fs");
const path = require("path");
const config = require("../config/config");

const logFilePath = path.join(__dirname, "../../", config.logFile);

function writeLog(level, message) {
    const currentDate = new Date().toLocaleString();

    const logMessage = `[${currentDate}] [${level}] ${message}\n`;

    fs.appendFileSync(logFilePath, logMessage);
}

module.exports = {
    info(message) {
        writeLog("INFO", message);
    },

    warning(message) {
        writeLog("WARNING", message);
    },

    error(message) {
        writeLog("ERROR", message);
    }
};