const sharp = require('sharp');

const fs = require('fs');

fs.copyFile('./input/test.txt', './output/test.txt', err => {
	if (err) throw err;
	console.log('files copied');
});
