const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();


const filename = process.env.FILENAME;

fs.writeFile(filename, 'This is a sample text file.', (err) => {
    if (err) {
        console.log('Error writing to file:', err);
    } else {
        console.log(`File ${filename} was successfully created and written to.`);
        

        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file:', err);
            } else {
                console.log('File contents:', data);
            }
        });
    }
});
