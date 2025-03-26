const fs = require('fs');

try {
    fs.unlinkSync('long-doc.txt');
    console.log('test.txt successfully deleted');
} catch (err) {
    console.log(err.message);
}

console.log('This is the end of the script');