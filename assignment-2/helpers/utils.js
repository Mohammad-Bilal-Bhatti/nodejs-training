const fs = require('fs');


function readJsonFile(path) {
    try {

        const encodingScheme = 'utf8';
        const data = fs.readFileSync(path, encodingScheme);
        return JSON.parse(data);
    
    } catch (err) {
        console.error(err);
        return null;
    }    
}


function writeJsonFile(path, data) {
    try {

        const content = JSON.stringify(data);
        fs.writeFileSync(path, content);
        return true;

    } catch (err) {
        console.error(err);
        return false;
    }
}


module.exports = {
    readJsonFile,
    writeJsonFile,
}